package com.example.demo.Repository;

import com.example.demo.Model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductModel,Integer> {
    Optional<ProductModel> findById(Long id);
    Optional<ProductModel> deleteById(Long id);
}
