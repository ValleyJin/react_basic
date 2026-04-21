package com.beanlog.lesson07.bootstrap;

import com.beanlog.lesson07.user.User;
import com.beanlog.lesson07.user.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * 애플리케이션 기동 시 DB에 관리자 계정이 없으면 한 명 만든다(시드).
 *
 * <p>교육용 기본값은 아래 상수. 실제 서비스에서는 환경 변수로 넘기거나, 최초 설치 마법사에서 받는 식이 일반적이다.
 * 비밀번호는 {@link PasswordEncoder}로 해시한 뒤만 저장한다.</p>
 */
@Component
public class AdminUserSeeder implements CommandLineRunner {

  private static final Logger log = LoggerFactory.getLogger(AdminUserSeeder.class);

  /** 시드 관리자 로그인 아이디(필요하면 상수만 바꿔서 실험). */
  public static final String SEED_USERNAME = "admin";

  /**
   * 시드 비밀번호(평문). DB에는 저장되지 않고, BCrypt 해시만 저장된다.
   * 강의에서 학습자에게 “처음 로그인할 때 이 비밀번호를 쓴다”고 안내하면 된다(8강).
   */
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
      log.info("[시드] 사용자가 이미 있어 건너뜁니다. count={}", users.count());
      return;
    }

    String hash = passwordEncoder.encode(SEED_PLAIN_PASSWORD);
    users.save(new User(SEED_USERNAME, hash, "ROLE_ADMIN"));
    log.info("[시드] 관리자 계정을 만들었습니다. username={}", SEED_USERNAME);
  }
}
