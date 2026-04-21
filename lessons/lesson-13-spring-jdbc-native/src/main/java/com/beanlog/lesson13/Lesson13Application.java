package com.beanlog.lesson13;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/** JPA 없이 JdbcTemplate 만으로 DB에 접근하는 예제 앱. */
@SpringBootApplication
public class Lesson13Application {

  public static void main(String[] args) {
    SpringApplication.run(Lesson13Application.class, args);
  }
}
