import React, { Component } from "react";
import { Link } from "react-router-dom";
class NavBar extends Component {
  handleLogout = () => {
    sessionStorage.removeItem("apiToken");
    window.location = "/";
  };
  render() {
    console.log(this.props);
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
