import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <span>INDESAN Área Reservada. Menu</span>
        <a className="navbar-brand" href=".">
          Facturas
        </a>
        <a className="navbar-brand" href=".">
          Pedidos
        </a>
        <a className="navbar-brand" href=".">
          Clientes
        </a>
        <a className="navbar-brand" href=".">
          Representantes
        </a>

        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 bg-warning"
            type="submit"
          >
            Buscar
          </button>
        </form>
      </nav>
    );
  }
}

export default NavBar;
