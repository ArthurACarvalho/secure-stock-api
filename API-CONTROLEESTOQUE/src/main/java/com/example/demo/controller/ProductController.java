package com.example.demo.controller;

import com.example.demo.dto.ProductDTO;
import com.example.demo.entity.product.Product;
import com.example.demo.repository.ProductRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    ResponseEntity<Product> save(@RequestBody @Valid ProductDTO productDto) {
        var Product = new Product();
        BeanUtils.copyProperties(productDto, Product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(Product));
    }

    @GetMapping
    ResponseEntity<List<Product>> findAll() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @GetMapping("/id/{id}")
    ResponseEntity<Product> findById(@PathVariable long id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }


    @PutMapping("/{id}")
    ResponseEntity<Product> update(@PathVariable long id, @RequestBody @Valid ProductDTO productDto) {
        Optional<Product> product = productRepository.findById(id);

        if (product.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        Product productModel = product.get();
        BeanUtils.copyProperties(productDto, productModel);
        productModel.setId(id);

        return ResponseEntity.ok(productRepository.save(productModel));
    }

    @Transactional
    @DeleteMapping("/{id}")
    ResponseEntity<Product> delete(@PathVariable long id) {
        productRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
