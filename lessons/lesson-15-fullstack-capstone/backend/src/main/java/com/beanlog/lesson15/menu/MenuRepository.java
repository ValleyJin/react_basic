package com.beanlog.lesson15.menu;

import org.springframework.data.jpa.repository.JpaRepository;

/** JPA가 기본 CRUD 를 제공한다 — 별도 메서드 없이도 {@code save}, {@code findAll} 사용 가능. */
public interface MenuRepository extends JpaRepository<Menu, Long> {}
