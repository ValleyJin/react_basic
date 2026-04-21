-- 백업 실습용 최소 데이터
CREATE TABLE IF NOT EXISTS cafe_note (
  id BIGSERIAL PRIMARY KEY,
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

INSERT INTO cafe_note (body) VALUES
  ('lesson14 백업 실습용 메모');
