import React, { Component } from "react";
import ProdutoDataService from "../servicos/produto.service";

export default class AddProduto extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeQuantidade = this.onChangeQuantidade.bind(this);
    this.onChangeValor = this.onChangeValor.bind(this);
    this.saveProduto = this.saveProduto.bind(this);
    this.newProduto = this.newProduto.bind(this);

    this.state = {
      //id: null,

      nomeProduto: "",
      quantidade: "",
      valor: "",      

      submitted: false
    };
  }

  onChangeNome(e) {
    this.setState({
        nomeProduto: e.target.value
    });
  }

  onChangeQuantidade(e) {
    this.setState({
        quantidade: e.target.value
    });
  }

  onChangeValor(e) {
    this.setState({
        valor: e.target.value
    });
  }

  saveProduto() {
    var data = {
      nomeProduto: this.state.nomeProduto,
      quantidade: this.state.quantidade,
      valor: this.state.valor
    };

    ProdutoDataService.create(data)
      .then(response => {
        this.setState({
          //id: response.data.id,
          nomeProduto: response.data.nomeProduto,
          quantidade: response.data.quantidade,
          valor: response.data.valor,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newProduto() {
    this.setState({
      //id: null,

      nomeProduto: "",
      quantidade: "",
      valor: "",      

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProduto}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="nomeProduto">Nome Produto</label>
              <input
                type="text"
                className="form-control"
                id="nomeProduto"
                required
                value={this.state.nomeProduto}
                onChange={this.onChangeNome}
                name="nomeProduto"
              />
            </div>

            <div className="form-group">
              <label htmlFor="quantidade">Quantidade</label>
              <input
                type="text"
                className="form-control"
                id="quantidade"
                required
                value={this.state.quantidade}
                onChange={this.onChangeQuantidade}
                name="quantidade"
              />
            </div>

            <div className="form-group">
              <label htmlFor="valor">Valor</label>
              <input
                type="text"
                className="form-control"
                id="valor"
                required
                value={this.state.valor}
                onChange={this.onChangeValor}
                name="valor"
              />
            </div>

            <button onClick={this.saveProduto} className="btn btn-success">
              Cadastrar
            </button>
          </div>
        )}
      </div>
    );
  }
}