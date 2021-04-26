package com.developer.test.webservice.exception;

import java.util.Date;

public class DetalhesErrosException {
	private Date dataHora;
	private String mensagem;
	private String detalhes;
	
	public DetalhesErrosException(Date dataHora, String mensagem, String detalhes) {
		super();
		this.dataHora = dataHora;
		this.mensagem = mensagem;
		this.detalhes = detalhes;
	}

	public Date getDataHora() {
		return dataHora;
	}

	/*public void setDataHora(Date dataHora) {
		this.dataHora = dataHora;
	}*/

	public String getMensagem() {
		return mensagem;
	}

	/*public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}*/

	public String getDetalhes() {
		return detalhes;
	}

	/*public void setDetalhes(String detalhes) {
		this.detalhes = detalhes;
	}*/
}