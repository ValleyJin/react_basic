package com.beanlog.lesson08.bootstrap;

import com.beanlog.lesson08.user.User;
import com.beanlog.lesson08.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class AdminUserSeeder implements CommandLineRunner {

  private static final Logger log = LoggerFactory.getLogger(AdminUserSeeder.class);

  public static final String SEED_USERNAME = "admin";
  public static final String SEED_PLAIN_PASSWORD = "admin1234";

  private final UserRepository users;
  private final PasswordEncoder passwordEncoder;

  public AdminUserSeeder(UserRepository users, PasswordEncoder passwordEncoder) {
    this.users = users;
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public void run(String... args) {
    if (users.count() > 0) {
      log.info("[시드] 사용자가 이미 있어 건너뜁니다.");
      return;
    }
    users.save(new User(SEED_USERNAME, passwordEncoder.encode(SEED_PLAIN_PASSWORD), "ROLE_ADMIN"));
    log.info("[시드] 관리자 계정 생성: {}", SEED_USERNAME);
  }
}
