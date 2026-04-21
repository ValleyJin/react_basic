package com.beanlog.lesson07.web;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * DB 없이도 “서버가 살아 있는지” 확인할 수 있는 가벼운 엔드포인트.
 */
@RestController
@RequestMapping("/api")
public class HealthController {

  @GetMapping("/health")
  public Map<String, String> health() {
    return Map.of("status", "ok", "lesson", "07");
  }
}
