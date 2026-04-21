package com.beanlog.lesson07.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * 비밀번호 해시 전용 설정.
 *
 * <p>전체 {@code spring-boot-starter-security}를 아직 켜지 않았다(필터 체인·기본 로그인 페이지 등이 자동으로 붙어
 * 7강 범위를 넘어서기 때문). 대신 {@code spring-security-crypto}만 의존성에 두고
 * {@link PasswordEncoder} 빈만 등록해 시드·8강 로직에서 재사용한다.</p>
 */
@Configuration
public class PasswordConfig {

  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }
}
