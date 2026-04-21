package com.beanlog.lesson15.web;

import com.beanlog.lesson15.security.JwtService;
import com.beanlog.lesson15.user.User;
import com.beanlog.lesson15.user.UserRepository;
import com.beanlog.lesson15.web.dto.LoginRequest;
import com.beanlog.lesson15.web.dto.LoginResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * 로그인 API — 평문 비밀번호와 DB 의 BCrypt 해시를 비교한 뒤 JWT 문자열을 발급한다.
 *
 * <p>실패 시 401 과 짧은 메시지 — 상세 원인(아이디 없음 vs 비밀번호 틀림)을 나누지 않는 것이
 * 계정 존재 여부를 추측하기 어렵게 하는 일반적인 관례다(교육용으로는 단순화).</p>
 */
@RestController
@RequestMapping("/api/auth")
public class AuthController {

  private final UserRepository users;
  private final PasswordEncoder passwordEncoder;
  private final JwtService jwtService;

  public AuthController(UserRepository users, PasswordEncoder passwordEncoder, JwtService jwtService) {
    this.users = users;
    this.passwordEncoder = passwordEncoder;
    this.jwtService = jwtService;
  }

  @PostMapping("/login")
  public LoginResponse login(@RequestBody LoginRequest body) {
    User user =
        users
            .findByUsername(body.username())
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "잘못된 자격 증명"));

    if (!passwordEncoder.matches(body.password(), user.getPasswordHash())) {
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "잘못된 자격 증명");
    }

    String token = jwtService.createToken(user.getUsername(), user.getRole());
    return new LoginResponse(token, "Bearer");
  }
}
