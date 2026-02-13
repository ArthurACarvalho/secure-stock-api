package com.example.demo.repository;

import com.example.demo.entity.product.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product,Integer> {
    Optional<Product> findById(Long id);
    Optional<Product> deleteById(Long id);
}
