package com.beanlog.lesson09.web;

import com.beanlog.lesson09.menu.Menu;
import com.beanlog.lesson09.menu.MenuRepository;
import com.beanlog.lesson09.web.dto.MenuRequest;
import com.beanlog.lesson09.web.dto.MenuResponse;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

/**
 * 메뉴 CRUD.
 *
 * <p>GET 은 누구나(카페 메뉴판 공개), POST/PUT/DELETE 는 관리자만 — {@link PreAuthorize}.</p>
 */
@RestController
@RequestMapping("/api/menus")
public class MenuController {

  private final MenuRepository menus;

  public MenuController(MenuRepository menus) {
    this.menus = menus;
  }

  @GetMapping
  public List<MenuResponse> list() {
    return menus.findAll().stream().map(this::toResponse).toList();
  }

  @GetMapping("/{id}")
  public MenuResponse get(@PathVariable Long id) {
    return menus
        .findById(id)
        .map(this::toResponse)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
  }

  @PostMapping
  @PreAuthorize("hasRole('ADMIN')")
  public MenuResponse create(@RequestBody MenuRequest body) {
    Menu saved = menus.save(new Menu(body.name().trim(), body.price().trim()));
    return toResponse(saved);
  }

  @PutMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public MenuResponse update(@PathVariable Long id, @RequestBody MenuRequest body) {
    Menu m =
        menus
            .findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
    m.setName(body.name().trim());
    m.setPrice(body.price().trim());
    return toResponse(menus.save(m));
  }

  @DeleteMapping("/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public void delete(@PathVariable Long id) {
    if (!menus.existsById(id)) {
      throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }
    menus.deleteById(id);
  }

  private MenuResponse toResponse(Menu m) {
    return new MenuResponse(m.getId(), m.getName(), m.getPrice());
  }
}
