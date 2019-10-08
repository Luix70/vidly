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
        {this.state.resultConsulta.representantes.map(repre => (
          <Representante
            repres={repre}
            onBorrarCliente={this.borrarCliente}
            onRecargarClientes={this.recargarClientes}
          />
        ))}
      </main>
    );
  }
}

export default App;
