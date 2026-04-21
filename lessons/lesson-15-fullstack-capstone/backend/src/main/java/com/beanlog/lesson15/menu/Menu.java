package com.beanlog.lesson15.menu;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 * 카페 메뉴 한 줄 — 프론트 입문 강의의 name/price 문자열과 맞춘다.
 *
 * <p>가격을 숫자 타입으로 두지 않고 문자열로 둔 이유: 통화 표기(콤마, '원')를 그대로 보여주기 위함(교육용 단순화).</p>
 */
@Entity
@Table(name = "beanlog_menus")
public class Menu {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 120)
  private String name;

  @Column(nullable = false, length = 32)
  private String price;

  protected Menu() {}

  public Menu(String name, String price) {
    this.name = name;
    this.price = price;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getPrice() {
    return price;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setPrice(String price) {
    this.price = price;
  }
}
