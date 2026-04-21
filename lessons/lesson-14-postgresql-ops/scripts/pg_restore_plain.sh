#!/usr/bin/env bash
# pg_dump 로 만든 .sql 파일을 같은 DB에 다시 넣기 (덮어쓰기 전에 주의)
set -euo pipefail
SQL_FILE="${1:?사용법: $0 path/to/backup.sql}"
docker exec -i beanlog-lesson14-postgres psql -U beanlog -d beanlog_lesson14 <"$SQL_FILE"
echo "복원 완료: $SQL_FILE"
