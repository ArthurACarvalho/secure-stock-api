package com.example.demo.Controller;

import com.example.demo.Dto.ProductDto;
import com.example.demo.Model.ProductModel;
import com.example.demo.Repository.ProductRepository;
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
    ResponseEntity<ProductModel> save(@RequestBody @Valid ProductDto productDto) {
        var Product = new ProductModel();
        BeanUtils.copyProperties(productDto, Product);
        return ResponseEntity.status(HttpStatus.CREATED).body(productRepository.save(Product));
    }

    @GetMapping
    ResponseEntity<List<ProductModel>> findAll() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<ProductModel> findById(@PathVariable long id) {
        return productRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @GetMapping("/{nome}")
    ResponseEntity<Object> findByName(@PathVariable String nome) {
        Optional<ProductModel> product = productRepository.findByNome(nome);
        if (product.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(product.get());
    }

}
