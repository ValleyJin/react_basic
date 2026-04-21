-- 트랜잭션: 주문 + 주문줄을 한 번에 넣기 (전부 성공하거나 전부 취소)

SET search_path TO lesson12;

BEGIN;

WITH o AS (
  INSERT INTO orders (customer_id, status) VALUES (1, 'NEW') RETURNING id
)
INSERT INTO order_lines (order_id, menu_item_id, qty)
SELECT o.id, 1, 1 FROM o;

COMMIT;

-- 실험: 아래 블록은 FK 위반이 나도록 해 ROLLBACK 을 확인해 볼 수 있다.
-- BEGIN;
-- INSERT INTO order_lines (order_id, menu_item_id, qty) VALUES (999999, 1, 1);
-- ROLLBACK;
