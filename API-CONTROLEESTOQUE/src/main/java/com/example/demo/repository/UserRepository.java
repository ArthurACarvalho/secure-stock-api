package com.example.demo.repository;

import com.example.demo.entity.user.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;

public interface UserRepository extends JpaRepository<Users, Long> {
    UserDetails findByLogin(String login);
}
