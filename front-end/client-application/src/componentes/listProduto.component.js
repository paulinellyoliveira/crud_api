import React, { Component } from "react";
import ProdutoDataService from "../servicos/produto.service";
import { Link } from "react-router-dom";

export default class ListProduto extends Component {
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.listarProdutos = this.listarProdutos.bind(this);
    this.atualizarLista = this.atualizarLista.bind(this);
    this.setProdutoAtual = this.setProdutoAtual.bind(this);
    //this.removeAllTutorials = this.removeAllTutorials.bind(this);
    //this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      produtos: [],
      produtoAtual: null,
      indexAtual: -1,
      //searchTitle: ""
    };
  }

  componentDidMount() {
    this.listarProdutos();
  }

  /*onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }*/

  listarProdutos() {
    ProdutoDataService.getAll()
      .then(response => {
        this.setState({
          produtos: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  atualizarLista() {
    this.listarProdutos();
    this.setState({
      produtoAtual: null,
      indexAtual: -1
    });
  }

  setProdutoAtual(produto, index) {
    this.setState({
        produtoAtual: produto,
        indexAtual: index
    });
  }

  /*removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    TutorialDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }*/

  render() {
    const { produtos, produtoAtual, indexAtual } = this.state;

    return (
      <div className="list row">
        
        <div className="col-md-6">
          <h4>Lista de Produtos</h4>

          <ul className="list-group">
            {produtos &&
              produtos.map((produto, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === indexAtual ? "active" : "")
                  }
                  onClick={() => this.setProdutoAtual(produto, index)}
                  key={index}
                >
                  {produto.nomeProduto}
                </li>
              ))}
          </ul>          
        </div>
        <div className="col-md-6">
          {produtoAtual ? (
            <div>
              <h4>Produto</h4>
              <div>
                <label>
                  <strong>Nome Produto:</strong>
                </label>{" "}
                {produtoAtual.nomeProduto}
              </div>
              <div>
                <label>
                  <strong>Quantidade:</strong>
                </label>{" "}
                {produtoAtual.quantidade}
              </div>
              <div>
                <label>
                  <strong>Valor:</strong>
                </label>{" "}
                {produtoAtual.valor}
              </div>

              <Link
                to={"/produto/" + produtoAtual.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Produto...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}