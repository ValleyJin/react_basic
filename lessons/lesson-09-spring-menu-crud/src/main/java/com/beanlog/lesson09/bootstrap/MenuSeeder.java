package com.beanlog.lesson09.bootstrap;

import com.beanlog.lesson09.menu.Menu;
import com.beanlog.lesson09.menu.MenuRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * 메뉴 테이블이 비어 있으면 예시 두 줄을 넣는다(7강 시드와 같은 아이디어).
 * {@link Order}(2): {@link AdminUserSeeder} 이후에 실행되도록(같은 CommandLineRunner 체인).
 */
@Component
@Order(2)
public class MenuSeeder implements CommandLineRunner {

  private static final Logger log = LoggerFactory.getLogger(MenuSeeder.class);

  private final MenuRepository menus;

  public MenuSeeder(MenuRepository menus) {
    this.menus = menus;
  }

  @Override
  public void run(String... args) {
    if (menus.count() > 0) {
      return;
    }
    menus.save(new Menu("에티오피아 예가체프", "5,500원"));
    menus.save(new Menu("플랫화이트", "5,000원"));
    log.info("[시드] 예시 메뉴 2건을 추가했습니다.");
  }
}
