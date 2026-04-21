package com.beanlog.lesson13.web;

import java.util.List;
import java.util.Map;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/** JdbcTemplate 으로 원시 SQL을 실행해 결과를 RowMapper 로 매핑한다. */
@RestController
@RequestMapping("/api/jdbc")
public class SalesJdbcController {

  private final JdbcTemplate jdbc;

  public SalesJdbcController(JdbcTemplate jdbc) {
    this.jdbc = jdbc;
  }

  /** 메뉴별 매출 합계(센트 단위) — GROUP BY 예시 */
  @GetMapping("/totals-by-item")
  public List<Map<String, Object>> totalsByItem() {
    return jdbc.query(
        """
        SELECT item_name, COALESCE(SUM(amount_cents), 0) AS total_cents
        FROM menu_sales
        GROUP BY item_name
        ORDER BY item_name
        """,
        (rs, rowNum) ->
            Map.of(
                "itemName", rs.getString("item_name"),
                "totalCents", rs.getLong("total_cents")));
  }

  /** 단순 스칼라 — queryForObject */
  @GetMapping("/row-count")
  public Map<String, Object> rowCount() {
    Integer n =
        jdbc.queryForObject("SELECT COUNT(*) FROM menu_sales", Integer.class);
    return Map.of("count", n);
  }
}
