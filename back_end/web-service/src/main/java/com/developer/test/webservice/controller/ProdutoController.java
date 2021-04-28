package com.developer.test.webservice.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.developer.test.webservice.exception.RecursoNaoEncontradoException;
import com.developer.test.webservice.model.Produto;
import com.developer.test.webservice.repository.ProdutoRepository;

@RestController
@RequestMapping("/web/v1")
public class ProdutoController {
	//classe de controller do produto
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	//método que lista todos os produtos
	@CrossOrigin
	@GetMapping("/listarProdutos")
	public List<Produto> listarProdutos(){
		return produtoRepository.findAll();
	}
	
	//método que busca o produto na base através do id
	@CrossOrigin
	@GetMapping("/obterProduto/{id}")
	public ResponseEntity<Produto> obterProdutoPorId (@PathVariable (value = "id") Long idProduto) 
			throws RecursoNaoEncontradoException {
		Produto produtoEncontrado = produtoRepository.findById(idProduto)
				.orElseThrow(() -> new RecursoNaoEncontradoException("Produto não encontrado para o id = " + idProduto));
		
		return ResponseEntity.ok().body(produtoEncontrado);
	}
	
	//método que grava um novo produto
	@CrossOrigin
	@PostMapping("/novoProduto")
	public Produto novoProduto(@Validated @RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
	
	//método que atualiza os dados de um produto através do id
	@CrossOrigin
	@PutMapping("/atualizarProduto/{id}")
	public ResponseEntity<Produto> atualizarProduto (@Validated @PathVariable (value = "id") Long idProduto, 
			@RequestBody Produto produto) throws RecursoNaoEncontradoException{
		Produto produtoEncontrado = produtoRepository.findById(idProduto)
				.orElseThrow(() -> new RecursoNaoEncontradoException("Produto não encontrado para o id = " + idProduto));
	
		produtoEncontrado.setNomeProduto(produto.getNomeProduto());
		produtoEncontrado.setQuantidade(produto.getQuantidade());
		produtoEncontrado.setValor(produto.getValor());
		
		final Produto produtoAtualizado = produtoRepository.save(produtoEncontrado);
		return ResponseEntity.ok(produtoAtualizado);
	}
	
	//método que atualiza a quantidade de um produto através do id
	@CrossOrigin
	@PutMapping("/atualizarQuantidade/{id}")
	public ResponseEntity<Produto> atualizarQuantidadeo (@Validated @PathVariable (value = "id") Long idProduto, 
			@RequestBody Produto produto) throws RecursoNaoEncontradoException{
		Produto produtoEncontrado = produtoRepository.findById(idProduto)
				.orElseThrow(() -> new RecursoNaoEncontradoException("Produto não encontrado para o id = " + idProduto));		
		
		produtoEncontrado.setQuantidade(produto.getQuantidade());			
		
		final Produto produtoAtualizado = produtoRepository.save(produtoEncontrado);
		return ResponseEntity.ok(produtoAtualizado);
	}
	
	//método que exclui um produto através do id
	@CrossOrigin
	@DeleteMapping("/excluirProduto/{id}")
	public Map<String, Boolean> excluirProduto(@PathVariable (value = "id") Long idProduto) throws RecursoNaoEncontradoException{
		Produto produtoEncontrado = produtoRepository.findById(idProduto)
				.orElseThrow(() -> new RecursoNaoEncontradoException("Produto não encontrado para o id = " + idProduto));
		
		produtoRepository.delete(produtoEncontrado);
		
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		response.put("produto excluido", Boolean.TRUE);
		return response;
	}
}