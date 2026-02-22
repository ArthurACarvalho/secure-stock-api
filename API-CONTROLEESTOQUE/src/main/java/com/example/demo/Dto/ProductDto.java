package com.example.demo.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProductDTO(
        @NotBlank String nome,
        @NotBlank String descricao,
        @NotNull @Min(0) Integer quantidade,
        @NotNull @DecimalMin("0.0") Double preco
){}