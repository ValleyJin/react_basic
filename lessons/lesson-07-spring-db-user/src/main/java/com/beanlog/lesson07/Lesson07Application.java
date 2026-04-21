package com.beanlog.lesson07;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Spring Boot 진입점.
 *
 * <p>{@code @SpringBootApplication} 하나로 설정 자동 구성 + 컴포넌트 스캔(이 패키지 이하)이 켜진다.
 * 별도 설정이 없으면 기본 내장 톰캣으로 HTTP 서버가 뜬다.</p>
 */
@SpringBootApplication
public class Lesson07Application {

  public static void main(String[] args) {
    SpringApplication.run(Lesson07Application.class, args);
  }
}
