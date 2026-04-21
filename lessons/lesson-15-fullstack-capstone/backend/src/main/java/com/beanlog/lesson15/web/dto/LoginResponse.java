package com.beanlog.lesson15.web.dto;

/**
 * 로그인 성공 응답 — 프론트는 accessToken 을 저장했다가 Authorization Bearer 로 보낸다.
 * tokenType 은 관례상 Bearer 문자열을 둔다.
 */
public record LoginResponse(String accessToken, String tokenType) {}
