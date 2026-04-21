package com.beanlog.lesson08.web;

import com.beanlog.lesson08.user.User;
import com.beanlog.lesson08.user.UserRepository;
import com.beanlog.lesson08.web.dto.UserResponse;
import java.util.List;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserRepository users;

  public UserController(UserRepository users) {
    this.users = users;
  }

  @GetMapping
  @PreAuthorize("hasRole('ADMIN')")
  public List<UserResponse> list() {
    return users.findAll().stream().map(this::toResponse).toList();
  }

  private UserResponse toResponse(User u) {
    return new UserResponse(u.getId(), u.getUsername(), u.getRole());
  }
}
