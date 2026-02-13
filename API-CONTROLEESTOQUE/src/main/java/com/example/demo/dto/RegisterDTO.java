package com.example.demo.dto;

import com.example.demo.entity.user.UserRole;

public record RegisterDTO(
        String login,
        String password,
        UserRole role
) {
}
