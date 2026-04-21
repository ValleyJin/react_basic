package com.beanlog.lesson07.web;

import com.beanlog.lesson07.user.User;
import com.beanlog.lesson07.user.UserRepository;
import com.beanlog.lesson07.web.dto.UserResponse;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 사용자 목록 조회(교육용).
 *
 * <p><strong>주의:</strong> 이 엔드포인트는 인증 없이 열려 있다. 실제 서비스에서는 관리자만 보도록 막거나 숨긴다.
 * 7강에서는 “DB에 시드가 들어갔는지” 확인하는 것이 목적이라 단순하게 두었다.</p>
 */
@RestController
@RequestMapping("/api/users")
public class UserController {

  private final UserRepository users;

  public UserController(UserRepository users) {
    this.users = users;
  }

  @GetMapping
  public List<UserResponse> list() {
    return users.findAll().stream().map(this::toResponse).toList();
  }

  private UserResponse toResponse(User u) {
    return new UserResponse(u.getId(), u.getUsername(), u.getRole());
  }
}
