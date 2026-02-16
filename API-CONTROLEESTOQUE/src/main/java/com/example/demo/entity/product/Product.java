package com.example.demo.entity.product;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "TBPRODUTO")

public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;
    private Integer quantidade;
    private Double preco;
}