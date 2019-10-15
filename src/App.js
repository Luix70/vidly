import React, { Component } from "react";
import "./App.css";
import Representante from "./components/representante";
//import getClientes, { getRepres } from "./services/fakeClientes";
import getClientes, { getRepres } from "./services/clientes";
import NavBar from "./components/navBar";
import ListGroup from "./components/common/listGroup";
import Pagination from "./components/common/pagination";

class App extends Component {
  state = {
    resultConsulta: null,
    listaRepresentantes: [],
    paginaActual: 1,
    itemsPerPage: 10,
    selectedRepre: -1,
    sortColumn: { path: "codigo", order: "asc" }
  };
  handleListGroupClick = async repre => {
    // console.log(repre);
    this.setState({
      resultConsulta: await getClientes(repre),
      selectedRepre: repre.codrep
    });
  };

  handlePageClicked = page => {
    this.setState({ paginaActual: page });
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
              <Pagination
                itemCount={this.state.listaRepresentantes.length}
                currentPage={this.state.paginaActual}
                itemsPerPage={this.state.itemsPerPage}
                pageClicked={this.handlePageClicked}
              />
            </div>
            <div className="row">
              <ListGroup
                onItemSelect={this.handleListGroupClick}
                selectedItem={this.state.selectedRepre}
                itemList={this.state.listaRepresentantes}
                paginaActual={this.state.paginaActual}
                itemsPerPage={this.state.itemsPerPage}
                itemId="codrep" //identificador del elemento
                itemValue="nombre" // valor que se mostrará
              />
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
