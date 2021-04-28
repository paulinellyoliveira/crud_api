import React, { Component } from "react";
import api from "./api";


class App extends Component{
  
  state = {
    produtos: [],
  }

  async componentDidMount(){
    const response = await api.get('/v1/listarProdutos');

    //console.log(response.data);

    this.setState({produtos: response.data});
  }

  render(){

    const { produtos } = this.state;

    return(
      <div>
        <h1>Lista de Produtos</h1>
        {console.log(produtos)}
        {produtos.map(produto => (
          <li key={produto.id}>
              <h2>
                <strong>Id: </strong>
                {produto.id}
                <strong> - Nome produto: </strong>
                {produto.nomeProduto}
                <strong> - Quantidade: </strong>
                {produto.quantidade}
                <strong> - Valor(R$): </strong>
                {produto.valor}
              </h2>
          </li>
        ))}
      </div>
    );
  };
};


/*function App() {
  return (
    <div className="App">
      <h1>Lista</h1>
    </div>
  );
}*/

export default App;
