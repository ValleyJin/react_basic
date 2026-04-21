package com.beanlog.lesson07.web.dto;

/**
 * HTTP 응답용 DTO — 비밀번호 해시를 JSON에 실수로 내보내지 않기 위해 엔티티와 분리했다.
 */
public record UserResponse(Long id, String username, String role) {}
