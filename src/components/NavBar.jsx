import React, { Component } from "react";
class NavBar extends Component {
  render() {
    const {
      totalRepresentantes,
      totalClientes,
      totalPedidos,
      totalFacturas
    } = this.props;
    return (
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href=".">
          Representantes{" "}
          <span className="badge badge-pill badge-secondary">
            {totalRepresentantes}
          </span>
        </a>
        <a className="navbar-brand" href=".">
          Clientes{" "}
          <span className="badge badge-pill badge-secondary">
            {totalClientes}
          </span>
        </a>

        <a className="navbar-brand" href=".">
          Pedidos{" "}
          <span className="badge badge-pill badge-secondary">
            {totalPedidos}
          </span>
        </a>
        <a className="navbar-brand" href=".">
          Importe{" "}
          <span className="badge badge-pill badge-secondary">
            {totalFacturas}
          </span>
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 "
            type="search"
            placeholder="Cliente/Repre/Referencia"
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
