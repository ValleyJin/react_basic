# 7강 — Spring Boot + PostgreSQL + User (시드)

`BACKEND_SERIES_PLAN.md`의 **lesson-07**에 해당합니다. React는 없고, **서버와 DB만** 다룹니다.

## 필요한 것

- **JDK 17** 이상
- **Maven 3.8+** (`mvn -v`로 확인)
- **Docker** (PostgreSQL을 Compose로 띄울 때). 로컬에 Postgres를 직접 깔았다면 Compose는 생략 가능.

## 1) 데이터베이스 기동

저장소 이 폴더에서:

```bash
docker compose up -d
```

## 2) 애플리케이션 실행

```bash
mvn spring-boot:run
```

기본 포트: **8080**

## 3) 동작 확인

- 브라우저 또는 HTTP 클라이언트: `GET http://localhost:8080/api/health`
- 시드 후 사용자 목록(비밀번호는 내려가지 않음): `GET http://localhost:8080/api/users`

시드 관리자 계정 상수는 `AdminUserSeeder.java`를 본다.

자세한 단계·개념은 **`강의.md`** 를 참고한다.
