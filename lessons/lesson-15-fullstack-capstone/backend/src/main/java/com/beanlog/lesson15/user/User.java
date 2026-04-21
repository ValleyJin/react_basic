package com.beanlog.lesson15.user;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * 관리자(또는 일반 사용자) 계정 — 7강 User 엔티티와 동일한 아이디어.
 *
 * <p>비밀번호는 절대 평문으로 저장하지 않고 BCrypt 해시만 {@code password_hash} 컬럼에 둔다.</p>
 */
@Entity
@Table(name = "beanlog_users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, unique = true, length = 64)
  private String username;

  @Column(name = "password_hash", nullable = false, length = 120)
  private String passwordHash;

  /** Spring Security 역할 문자열 — 예: {@code ROLE_ADMIN} */
  @Column(nullable = false, length = 64)
  private String role;

  protected User() {}

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
