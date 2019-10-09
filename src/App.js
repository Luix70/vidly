import React, { Component } from "react";
import "./App.css";
import Representante from "./components/Representante";
import getClientes from "./services/fakeClientes";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    resultConsulta: getClientes()
  };

  render() {
    return (
      <main>
        <NavBar
          //totalClientes={this.state.listaclientes.length}
          totalRepresentantes={this.state.resultConsulta.representantes.length}
          totalPedidos="Muchos"
          totalFacturas="Incalculable"
        />
        <div className="row">
<<<<<<< HEAD
          <div className="col-3"></div>
=======
          <div className="col-2"></div>
>>>>>>> 28b0551835070368ef3ff7ac903da707dd38efb7
          <div className="col">
            {" "}
            {this.state.resultConsulta.representantes.map(repre => (
              <Representante
                key={repre.codrep}
                repres={repre}
                onBorrarCliente={this.borrarCliente}
                onRecargarClientes={this.recargarClientes}
              />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
