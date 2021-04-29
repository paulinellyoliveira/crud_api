import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";

import AddProduto from "./componentes/addProduto.component";
import Produto from "./componentes/produto.component";
import ListProduto from "./componentes/listProduto.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/produtos" className="navbar-brand">
            Paulinelly
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/produtos"} className="nav-link">
                Produtos
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/produtos"]} component={ListProduto} />
            <Route exact path="/add" component={AddProduto} />
            <Route path="/produtos/:id" component={Produto} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
