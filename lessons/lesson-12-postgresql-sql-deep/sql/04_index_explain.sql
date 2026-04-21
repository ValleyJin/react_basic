-- 인덱스 생성 후 EXPLAIN (실행 계획) 관찰

SET search_path TO lesson12;

-- 반복 조회에 쓸 인덱스 예시 (주문이 어느 고객인지 자주 찾을 때)
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders (customer_id);

-- 실행 계획 (실제 실행은 하지 않고 계획만 보려면 EXPLAIN)
EXPLAIN
SELECT * FROM orders WHERE customer_id = 1;

-- 분석까지 포함한 상세 계획 (통계 기반, 데이터가 적으면 단순해 보일 수 있음)
EXPLAIN ANALYZE
SELECT * FROM orders WHERE customer_id = 1;
