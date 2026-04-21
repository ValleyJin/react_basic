# 14강 — PostgreSQL 운영 맛보기 (스타일 C: 백업·풀·Docker 볼륨)

**스타일 A·B와 별도.** `pg_dump` / `psql` 스크립트와, Spring에서 쓰는 **HikariCP 예시 YAML**만 둔다.

상세 학습은 **`강의.md`** 를 연다.

## 한 줄

```bash
docker compose up -d
psql "postgresql://beanlog:beanlog@localhost:5437/beanlog_lesson14" -f sql/01_seed.sql
chmod +x scripts/*.sh
./scripts/pg_dump_plain.sh
```

호스트 포트 **5437**.
