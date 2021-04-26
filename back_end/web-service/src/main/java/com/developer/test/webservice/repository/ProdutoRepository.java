package com.developer.test.webservice.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.developer.test.webservice.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	//criando interface do produto que extende JpaRepository (spring data repository)
}