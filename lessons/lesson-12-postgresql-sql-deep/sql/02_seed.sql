SET search_path TO lesson12;

INSERT INTO customers (name, email) VALUES
  ('김손님', 'kim@example.com'),
  ('이손님', 'lee@example.com');

INSERT INTO menu_items (sku, name, price_cents) VALUES
  ('DRIP-001', '에티오피아 핸드드립', 5500),
  ('LAT-001', '플랫화이트', 5000),
  ('CB-001', '콜드브루', 4500);

INSERT INTO orders (customer_id, status) VALUES
  (1, 'PAID'),
  (2, 'NEW');

INSERT INTO order_lines (order_id, menu_item_id, qty) VALUES
  (1, 1, 2),
  (1, 3, 1),
  (2, 2, 1);
