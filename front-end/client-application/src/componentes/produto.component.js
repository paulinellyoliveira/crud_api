import React, { Component } from "react";
import ProdutoDataService from "../servicos/produto.service";

export default class Produto extends Component {
  constructor(props) {
    super(props);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeQuantidade = this.onChangeQuantidade.bind(this);
    this.onChangeValor = this.onChangeValor.bind(this);
    this.getProduto = this.getProduto.bind(this);
    this.updatePublicado = this.updatePublicado.bind(this);
    this.updateProduto = this.updateProduto.bind(this);
    this.deleteProduto = this.deleteProduto.bind(this);

    this.state = {
      produtoAtual: {
        //id: null,
        nomeProduto: "",
        quantidade: "",
        valor: "",
        published: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getProduto(this.props.match.params.id);
  }

  onChangeNome(e) {
    const nomeProduto = e.target.value;

    this.setState(function(prevState) {
      return {
        produtoAtual: {
          ...prevState.produtoAtual,
          nomeProduto: nomeProduto
        }
      };
    });
  }

  onChangeQuantidade(e) {
    const quantidade = e.target.value;
    
    this.setState(prevState => ({
        produtoAtual: {
        ...prevState.produtoAtual,
        quantidade: quantidade
      }
    }));
  }

  onChangeValor(e) {
    const valor = e.target.value;
    
    this.setState(prevState => ({
        produtoAtual: {
        ...prevState.produtoAtual,
        valor: valor
      }
    }));
  }

  getProduto(id) {
    ProdutoDataService.get(id)
      .then(response => {
        this.setState({
            produtoAtual: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublicado(status) {
    var data = {
      id: this.state.produtoAtual.id,
      nomeProduto: this.state.produtoAtual.nomeProduto,
      quantidade: this.state.produtoAtual.quantidade,
      valor: this.state.produtoAtual.valor,
      published: status
    };

    ProdutoDataService.update(this.state.produtoAtual.id, data)
      .then(response => {
        this.setState(prevState => ({
            produtoAtual: {
            ...prevState.produtoAtual,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateProduto() {
    ProdutoDataService.update(
      this.state.produtoAtual.id,
      this.state.produtoAtual
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "Produto atualizado com sucesso!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  paginaInicial(){
    this.props.history.push('/produtos');
  }

  deleteProduto() {    
    ProdutoDataService.delete(this.state.produtoAtual.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/produtos');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { produtoAtual } = this.state;

    return (
      <div>
        {produtoAtual ? (
          <div className="edit-form">
            <h4>Produto</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Nome produto</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={produtoAtual.nomeProduto}
                  onChange={this.onChangeNome}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Quantidade</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={produtoAtual.quantidade}
                  onChange={this.onChangeQuantidade}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Valor</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={produtoAtual.valor}
                  onChange={this.onChangeValor}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {produtoAtual.published ? "Published" : "Pending"}
              </div>
            </form>
            
            <button
                className="badge badge-primary mr-2"
                onClick={() => this.paginaInicial()}
            >
                Início
            </button>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProduto}
            >
                Excluir
            </button>            

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProduto}
            >
                Atualizar
            </button>            

            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Selecione um produto...</p>
          </div>
        )}
      </div>
    );
  }
}