import React, { Component } from "react";
import "./App.css";
import Representante from "./components/Representante";
import getClientes, { getRepres } from "./services/fakeClientes";
import NavBar from "./components/NavBar";
import ListGroup from "./components/common/ListGroup";
class App extends Component {
  state = {
    resultConsulta: null,
    listaRepresentantes: []
  };
  handleListGroupClick = repre => {
    this.setState({ resultConsulta: getClientes(repre) });
  };

  componentDidMount() {
    this.setState({
      listaRepresentantes: getRepres()
    });
  }

  render() {
    return (
      <main style={{ backgroundColor: "#ddd" }}>
        <NavBar
          //totalClientes={this.state.listaclientes.length}
          totalRepresentantes={
            this.state.resultConsulta === null
              ? 0
              : this.state.resultConsulta.representantes.length
          }
          totalPedidos="Muchos"
          totalFacturas="Incalculable"
        />
        <div className="row">
          <div className="col-3 smallprint">
            <ListGroup
              handleClick={this.handleListGroupClick}
              itemList={this.state.listaRepresentantes}
            />
          </div>
          <div className="col" style={{ backgroundColor: "#d6d8db" }}>
            {" "}
            {this.state.resultConsulta === null ? (
              <span>&nbsp;</span>
            ) : (
              this.state.resultConsulta.representantes.map(repre => (
                <Representante
                  key={repre.codrep}
                  repres={repre}
                  onBorrarCliente={this.borrarCliente}
                  onRecargarClientes={this.recargarClientes}
                />
              ))
            )}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
