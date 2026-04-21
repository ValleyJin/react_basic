# 8강 — Spring Security + JWT 로그인

7강에서 만든 사용자·DB를 전제로, **로그인 API**와 **JWT**, **관리자 전용 엔드포인트**를 추가한다.

## 선행

- `lesson-07`을 이해했거나, 동일한 `User` 엔티티·시드 개념을 알 것

## 실행

```bash
docker compose up -d   # Postgres (호스트 포트 5433)
mvn spring-boot:run
```

## 검증 순서

1. `POST http://localhost:8080/api/auth/login` — JSON `{"username":"admin","password":"admin1234"}`
2. 응답 `accessToken`을 복사
3. `GET http://localhost:8080/api/admin/ping` — 헤더 `Authorization: Bearer <토큰>`
4. `GET http://localhost:8080/api/users` — 동일 헤더

자세한 설명은 **`강의.md`** 참고.
