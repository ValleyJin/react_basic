package com.beanlog.lesson15.web.dto;

/** 로그인 요청 본문(JSON) — 필드 이름이 JSON 키와 일치해야 한다. */
public record LoginRequest(String username, String password) {}
