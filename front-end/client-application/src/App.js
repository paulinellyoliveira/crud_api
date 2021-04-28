import React, { Component } from "react";
import api from "./api";


class App extends Component{
  
  state = {
    produtos: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    console.log(response.data);

    this.setState({produtos: response.data});
  }

  render(){

    const { produtos } = this.state;

    return(
      <div>
        <h1>Listar Produtos</h1>
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