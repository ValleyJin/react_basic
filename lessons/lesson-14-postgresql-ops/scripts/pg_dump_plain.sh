#!/usr/bin/env bash
# PostgreSQL 논리 백업(SQL 텍스트). 컨테이너가 떠 있어야 한다.
set -euo pipefail
OUT_DIR="${1:-./backups}"
mkdir -p "$OUT_DIR"
FILE="$OUT_DIR/beanlog_lesson14_$(date +%Y%m%d_%H%M%S).sql"
docker exec beanlog-lesson14-postgres pg_dump -U beanlog --no-owner --no-acl beanlog_lesson14 >"$FILE"
echo "저장됨: $FILE"
