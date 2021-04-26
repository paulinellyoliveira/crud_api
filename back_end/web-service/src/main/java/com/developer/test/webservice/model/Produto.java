package com.developer.test.webservice.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produto")
public class Produto {
	//Classe produto com os atributos id, nome do produto, quantidade e valor
	//Essa classe representa a tabela Produto do banco de dados
	private Long id;
	private String nomeProduto;
	private Integer quantidade;
	private Float valor;
	
	public Produto() {	}
	
	public Produto(Long id, String nomeProduto, Integer quantidade, Float valor) {		
		this.id = id;
		this.nomeProduto = nomeProduto;
		this.quantidade = quantidade;
		this.valor = valor;
	}
	
	public Produto(Integer quantidade) {	
		this.quantidade = quantidade;		
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	@Column(name = "nomeProduto", nullable = false)
	public String getNomeProduto() {
		return nomeProduto;
	}
	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}

	@Column(name = "quantidade", nullable = false)
	public Integer getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(Integer quantidade) {
		this.quantidade = quantidade;
	}

	@Column(name = "valor", nullable = false)
	public Float getValor() {
		return valor;
	}
	public void setValor(Float valor) {
		this.valor = valor;
	}	
}