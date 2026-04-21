# 12강 — PostgreSQL 심화 (스타일 A: SQL·`psql`·실행 계획)

**Java 없음.** Docker로 띄운 PostgreSQL에 `psql`로 접속해, 스키마·조회·인덱스·트랜잭션을 직접 익힌다.

상세 학습 순서·용어·트러블슈팅은 이 폴더의 **`강의.md`** 를 연다.

## 한 줄 실행

```bash
docker compose up -d
psql "postgresql://beanlog:beanlog@localhost:5435/beanlog_lesson12"
```

호스트 포트는 **5435** (7~9강과 충돌 피함).
