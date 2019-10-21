import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/dashboard/articulos">Artículos</Link>
          </li>
          <li>
            <Link to="/dashboard/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/dashboard/permisos">Permisos</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
