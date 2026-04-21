package com.beanlog.lesson15.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import javax.crypto.SecretKey;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * JWT 생성·검증 — 8강과 동일한 HS256 대칭키 방식.
 *
 * <p>토큰 본문에 {@code subject}=사용자명, 클레임 {@code role}=Spring Security 가 기대하는 역할 문자열을 넣는다.
 * 운영에서는 키 로테이션·짧은 만료·리프레시 토큰 등을 검토한다.</p>
 */
@Component
public class JwtService {

  private final SecretKey key;
  private final long expirationMs;

  public JwtService(
      @Value("${app.jwt.secret}") String secret,
      @Value("${app.jwt.expiration-ms}") long expirationMs) {
    byte[] bytes = secret.getBytes(StandardCharsets.UTF_8);
    if (bytes.length < 32) {
      throw new IllegalStateException("app.jwt.secret 은 HS256에 맞게 충분히 길어야 합니다(권장 32바이트 이상).");
    }
    this.key = Keys.hmacShaKeyFor(bytes);
    this.expirationMs = expirationMs;
  }

  /** 로그인 성공 시 한 번 발급 — 프론트는 Authorization: Bearer 로 매 요청에 실어 보낸다. */
  public String createToken(String username, String role) {
    Date now = new Date();
    return Jwts.builder()
        .subject(username)
        .claim("role", role)
        .issuedAt(now)
        .expiration(new Date(now.getTime() + expirationMs))
        .signWith(key)
        .compact();
  }

  public Claims parseClaims(String token) {
    return Jwts.parser().verifyWith(key).build().parseSignedClaims(token).getPayload();
  }

  public String extractUsername(String token) {
    return parseClaims(token).getSubject();
  }
}
