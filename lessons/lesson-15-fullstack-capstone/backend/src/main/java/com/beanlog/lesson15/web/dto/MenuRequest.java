package com.beanlog.lesson15.web.dto;

/** 메뉴 생성·수정 시 본문 — name 과 price 는 앞뒤 공백을 컨트롤러에서 trim 한다. */
public record MenuRequest(String name, String price) {}
