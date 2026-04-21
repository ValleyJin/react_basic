-- 12강 실습용 스키마 (BeanLog 맥락의 미니 주문 예제)
-- psql에서 실행: \i sql/01_schema.sql  또는 파일 내용을 복사해 실행

CREATE SCHEMA IF NOT EXISTS lesson12;
SET search_path TO lesson12;

DROP TABLE IF EXISTS order_lines CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS menu_items CASCADE;

CREATE TABLE customers (
  id          BIGSERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  email       TEXT UNIQUE
);

CREATE TABLE menu_items (
  id          BIGSERIAL PRIMARY KEY,
  sku         TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  price_cents INTEGER NOT NULL CHECK (price_cents >= 0)
);

CREATE TABLE orders (
  id           BIGSERIAL PRIMARY KEY,
  customer_id  BIGINT NOT NULL REFERENCES customers (id),
  ordered_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  status       TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'PAID', 'CANCELLED'))
);

CREATE TABLE order_lines (
  id           BIGSERIAL PRIMARY KEY,
  order_id     BIGINT NOT NULL REFERENCES orders (id) ON DELETE CASCADE,
  menu_item_id BIGINT NOT NULL REFERENCES menu_items (id),
  qty          INTEGER NOT NULL CHECK (qty > 0)
);
