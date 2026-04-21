-- SELECT · JOIN · 집계 (강의.md「따라 하기」와 함께 읽기)

SET search_path TO lesson12;

-- 단순 조회
SELECT id, name, email FROM customers ORDER BY id;

-- 주문별 총액(원): 수량 * 단가
SELECT
  o.id AS order_id,
  c.name AS customer,
  SUM(ol.qty * mi.price_cents) AS total_cents
FROM orders o
JOIN customers c ON c.id = o.customer_id
JOIN order_lines ol ON ol.order_id = o.id
JOIN menu_items mi ON mi.id = ol.menu_item_id
GROUP BY o.id, c.name
ORDER BY o.id;
