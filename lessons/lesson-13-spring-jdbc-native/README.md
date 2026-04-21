# 13강 — Spring `JdbcTemplate`과 원시 SQL (스타일 B)

**JPA 없음.** `spring-boot-starter-jdbc` + PostgreSQL. `schema.sql` / `data.sql` 로 테이블을 만들고, REST에서 `JdbcTemplate`으로 `GROUP BY` 집계를 노출한다.

상세 학습은 **`강의.md`** 를 연다.

## 실행

```bash
docker compose up -d
mvn spring-boot:run
```

- DB: `localhost:5436`, DB명 `beanlog_lesson13`
- 예: `GET http://localhost:8080/api/jdbc/totals-by-item`
