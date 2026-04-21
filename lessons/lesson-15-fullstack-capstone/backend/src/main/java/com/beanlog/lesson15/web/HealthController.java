package com.beanlog.lesson15.web;

import java.util.Map;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 인증 없이 호출 가능한 헬스 체크 — DB 연결 여부까지는 검사하지 않고 프로세스 생존만 확인한다.
 */
@RestController
@RequestMapping("/api")
public class HealthController {

  @GetMapping("/health")
  public Map<String, String> health() {
    return Map.of("status", "ok", "lesson", "15-capstone");
  }
}
