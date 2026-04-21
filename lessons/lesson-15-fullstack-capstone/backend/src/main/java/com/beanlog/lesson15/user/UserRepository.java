package com.beanlog.lesson15.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

/** 로그인 시 {@code username} 으로 사용자 한 명을 찾는다. */
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByUsername(String username);
}
