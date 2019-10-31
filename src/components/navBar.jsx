import React, { Component } from "react";
import { Link } from "react-router-dom";
import httpService from "../services/httpService";
import { apiEndPoint3 } from "../config.json";

class NavBar extends Component {
  handleLogout = () => {
    sessionStorage.removeItem("apiToken");
    sessionStorage.removeItem("cachedData");
    window.location = "/";
  };

  handleGetAll = async () => {
    const token = sessionStorage.getItem("apiToken");
    try {
      const { data } = await httpService.get(
        apiEndPoint3 + "customers/GetAll",
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      alert(data);
    } catch (error) {
      if (error.response && error.response.status === 500)
        alert("No Autorizado");
    }
  };
  render() {
    // console.log(this.props);
    const { NombreUsuario } = this.props;
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

        <Link className="navbar-brand" to="/dashboard">
          Administracion
        </Link>
        <Link
          onClick={this.handleGetAll}
          className="navbar-brand"
          to="/dashboard"
        >
          GetAll
        </Link>
        {!NombreUsuario && (
          <React.Fragment>
            <Link className="navbar-brand" to="/login">
              Login
            </Link>

            <Link className="navbar-brand" to="/registro">
              Registro
            </Link>
          </React.Fragment>
        )}

        {NombreUsuario && (
          <React.Fragment>
            <Link className="navbar-brand" to="/perfil">
              {NombreUsuario}
            </Link>

            <Link onClick={this.handleLogout} className="navbar-brand" to="/">
              Logout
            </Link>
          </React.Fragment>
        )}
      </nav>
    );
  }
}

export default NavBar;
