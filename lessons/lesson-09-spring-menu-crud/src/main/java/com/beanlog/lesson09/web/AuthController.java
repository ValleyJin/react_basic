package com.beanlog.lesson09.web;

import com.beanlog.lesson09.security.JwtService;
import com.beanlog.lesson09.user.User;
import com.beanlog.lesson09.user.UserRepository;
import com.beanlog.lesson09.web.dto.LoginRequest;
import com.beanlog.lesson09.web.dto.LoginResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * 로그인: 평문 비밀번호를 BCrypt로 검증한 뒤 JWT 문자열을 발급한다.
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
