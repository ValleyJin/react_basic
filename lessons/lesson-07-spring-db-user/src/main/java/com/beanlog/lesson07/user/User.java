package com.beanlog.lesson07.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * 애플리케이션 사용자(관리자) 한 명을 나타내는 JPA 엔티티.
 *
 * <p>비밀번호는 <strong>절대 평문으로 저장하지 않는다</strong>. BCrypt로 만든 해시 문자열만 {@link #passwordHash}에 넣는다.
 * 로그인 API(8강)에서 사용자가 입력한 평문과 {@code BCrypt.matches}로 비교한다.</p>
 */
@Entity
@Table(name = "beanlog_users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  /** 로그인 아이디(중복 불가). */
  @Column(nullable = false, unique = true, length = 64)
  private String username;

  /** BCrypt 해시 문자열. 컬럼 이름을 명시해 DB에서 의미가 드러나게 했다. */
  @Column(name = "password_hash", nullable = false, length = 120)
  private String passwordHash;

  /**
   * 권한 문자열. 예: {@code ROLE_ADMIN}.
   * (8강 Spring Security와 맞출 때 그대로 쓸 수 있게 넓게 잡아 두었다.)
   */
  @Column(nullable = false, length = 64)
  private String role;

  protected User() {
    // JPA용 무인자 생성자 — 리플렉션으로만 쓰이게 두는 편이 안전하다.
  }

  public User(String username, String passwordHash, String role) {
    this.username = username;
    this.passwordHash = passwordHash;
    this.role = role;
  }

  public Long getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }

  public String getPasswordHash() {
    return passwordHash;
  }

  public String getRole() {
    return role;
  }
}
