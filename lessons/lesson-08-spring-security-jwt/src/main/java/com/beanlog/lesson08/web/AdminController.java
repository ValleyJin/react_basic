package com.beanlog.lesson08.web;

import java.util.Map;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 관리자만 호출할 수 있는 테스트 엔드포인트.
 */
@RestController
@RequestMapping("/api/admin")
public class AdminController {

  @GetMapping("/ping")
  @PreAuthorize("hasRole('ADMIN')")
  public Map<String, String> ping() {
    return Map.of("message", "관리자만 볼 수 있습니다.", "lesson", "08");
  }
}
