import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          INDESAN
        </Link>
        <Link className="navbar-brand" to="/blog">
          Blog
        </Link>

        <Link className="navbar-brand" to="/ar">
          Área Reservada
        </Link>

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
