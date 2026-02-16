package com.example.demo.dto;

import com.example.demo.entity.user.UserRole;
import jakarta.validation.constraints.NotBlank;

public record RegisterDTO(
        @NotBlank String login,
        @NotBlank String password,
        UserRole role
) {
}
