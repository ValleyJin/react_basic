package com.beanlog.lesson15.web.dto;

/** 목록·상세 API 가 클라이언트에 돌려주는 메뉴 한 줄 — 엔티티를 그대로 노출하지 않는다. */
public record MenuResponse(Long id, String name, String price) {}
