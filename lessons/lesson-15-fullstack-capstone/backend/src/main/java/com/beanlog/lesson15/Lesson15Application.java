package com.beanlog.lesson15;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * 15강 풀스택 캡스톤 — Spring Boot 진입점.
 *
 * <p>이 애플리케이션은 다음을 한 번에 포함한다: JPA(PostgreSQL), Spring Security + JWT,
 * 메뉴 REST API. 프론트엔드(Vite React)는 별도 프로세스이며, CORS로 이 서버(기본 8080)를 호출한다.</p>
 */
@SpringBootApplication
public class Lesson15Application {

  public static void main(String[] args) {
    SpringApplication.run(Lesson15Application.class, args);
  }
}
