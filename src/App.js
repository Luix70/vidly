import React, { Component } from "react";
import "./App.css";
import Tablaclientes from "./components/Tablaclientes.jsx";
import getClientes from "./services/fakeClientes";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    listaclientes: [...getClientes().representantes[0].clientes]
  };

  render() {
    return (
      <main>
        <NavBar />
        <Tablaclientes
          listaclientes={this.state.listaclientes}
          onBorrarCliente={this.borrarCliente}
          onRecargarClientes={this.recargarClientes}
        />
      </main>
    );
  }

  borrarCliente = cod => {
    // console.log("eliminamos el cliente " + cod);

    for (var i = 0; i < this.state.listaclientes.length; i++) {
      if (this.state.listaclientes[i].codigo === cod) {
        this.state.listaclientes.splice(i, 1);
        i--;
      }
    }

    this.setState({
      numclientes: 0
    });
  };

  recargarClientes = () => {
    this.setState({
      listaclientes: [...getClientes().representantes[0].clientes]
    });
  };
}

export default App;
