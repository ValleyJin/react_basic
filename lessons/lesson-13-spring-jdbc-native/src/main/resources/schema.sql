DROP TABLE IF EXISTS menu_sales;

CREATE TABLE menu_sales (
  id BIGSERIAL PRIMARY KEY,
  item_name TEXT NOT NULL,
  amount_cents INTEGER NOT NULL CHECK (amount_cents >= 0),
  sold_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
