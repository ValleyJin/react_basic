# 9강 — 메뉴 CRUD + 권한 + CORS

8강의 **JWT·Spring Security**를 그대로 두고, **Menu** 엔티티와 REST API를 추가한다.  
`GET /api/menus`는 **누구나** 읽을 수 있고, `POST`·`PUT`·`DELETE`는 **관리자 토큰**이 있어야 한다.  
개발 중 **Vite(보통 `http://localhost:5173`)**에서 브라우저 `fetch`를 쓰려면 **CORS**를 허용해야 한다.

## 선행

- `lesson-08-spring-security-jwt`를 이해했거나, 동일한 로그인·JWT 흐름을 알 것

## 실행

```bash
docker compose up -d   # Postgres (호스트 포트 5434, DB명 beanlog_lesson09)
mvn spring-boot:run
```

`application.yml`에서 JDBC URL·계정은 환경에 맞게 조정한다.

## 검증 순서 (Postman 등)

1. `GET http://localhost:8080/api/menus` — 토큰 없이 200·JSON 목록
2. `POST http://localhost:8080/api/menus` — 본문 `{"name":"테스트","price":"1,000원"}` 만으로 호출 → 401/403
3. `POST /api/auth/login` 으로 `accessToken` 획득 후, 같은 POST에 `Authorization: Bearer <토큰>` → 201 또는 200·생성된 메뉴
4. `DELETE /api/menus/{id}` — 관리자 토큰으로만 성공

## 다음 강(10강)

`lesson-10-react-admin-ui`에서 React로 로그인·보호 라우트·메뉴 관리 UI를 붙인다(이 9강 서버가 떠 있어야 한다).

자세한 설명은 **`강의.md`** 참고.
