import React, { Component } from "react";
import Sidebar from "./sidebar";
import { Route } from "react-router-dom";
import ClientesAdmin from "./clientesAdmin.jsx";
import PermisosAdmin from "./permisosAdmin.jsx";
import ArticulosAdmin from "./articulosAdmin.jsx";
class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex">
        <div className="bg-light border-right col-2" id="sidebar-wrapper">
          <Sidebar />
        </div>
        <div id="page-content-wrapper">
          <Route path="/dashboard/clientes" component={ClientesAdmin} />
          <Route path="/dashboard/articulos" component={ArticulosAdmin} />
          <Route path="/dashboard/permisos" component={PermisosAdmin} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
