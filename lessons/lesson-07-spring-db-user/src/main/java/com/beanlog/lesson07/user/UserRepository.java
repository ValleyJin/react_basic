package com.beanlog.lesson07.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * {@link User} 엔티티에 대한 DB 접근을 Spring Data JPA가 구현체를 자동 생성한다.
 *
 * <p>메서드 이름 규칙({@code findByUsername})만 맞추면 쿼리를 직접 적지 않아도 된다(교육용으로 충분).</p>
 */
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByUsername(String username);
}
