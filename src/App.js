import React, { Component } from "react";
import "./App.css";
import Representante from "./components/representante";
import getClientes, { getRepres } from "./services/clientes";
import NavBar from "./components/navBar";
import ListGroup from "./components/common/listGroup";

class App extends Component {
  state = {
    resultConsulta: null,
    listaRepresentantes: [],

    sortColumn: { path: "codigo", order: "asc" },
    FechaConsulta: ""
  };
  handleListGroupClick = async repre => {
    // console.log(repre);
    const lr = await getClientes(repre);
    this.setState({
      resultConsulta: lr,
      selectedRepre: repre.codrep,
      FechaConsulta: lr.FechaConsulta
    });
  };

  handleSortCustomers = header => {
    this.setState({
      sortColumn: {
        path: header,
        order:
          this.state.sortColumn.path === header
            ? this.state.sortColumn.order === "asc"
              ? "desc"
              : "asc"
            : "asc"
      }
    });
  };
  async componentDidMount() {
    this.setState({
      listaRepresentantes: await getRepres()
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
            <div className="row">
              <ListGroup
                onItemSelect={this.handleListGroupClick}
                itemList={this.state.listaRepresentantes}
                itemId="codrep" //identificador del elemento
                itemValue="nombre" // valor que se mostrará
              />
            </div>
            <div style={{ paddingLeft: "2em" }} className="row">
              {this.state.FechaConsulta === ""
                ? ""
                : "Consulta: " +
                  new Date(this.state.FechaConsulta).toLocaleTimeString()}

              {"  "}
              {this.state.resultConsulta === null
                ? ""
                : "/ Caché: " +
                  new Date(
                    this.state.resultConsulta.FechaCache
                  ).toLocaleTimeString()}
            </div>
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
                  onSort={this.handleSortCustomers}
                  sortColumn={this.state.sortColumn}
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
