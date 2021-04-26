package com.developer.test.webservice.exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(RecursoNaoEncontradoException.class)
	public ResponseEntity<?> recursoNaoEncontradoException (RecursoNaoEncontradoException erro, WebRequest request){
		DetalhesErrosException detalheErros = new DetalhesErrosException(new Date(), erro.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(detalheErros, HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(Exception.class)
	public ResponseEntity<?> globalExceptionHandler (Exception erro, WebRequest request){
		DetalhesErrosException detalheErros = new DetalhesErrosException(new Date(), erro.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(detalheErros, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}