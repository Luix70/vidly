import React, { Component } from "react";
import getClientes from "../services/fakeClientes";
import Cliente from "./Cliente";

class Tablaclientes extends Component {
  state = {
    listaclientes: [...getClientes().representantes[0].clientes]
  };
  render() {
    return (
      <div className="table-responsive">
        <table className="table   table-dark  table-sm">
          <caption>
            {this.state.listaclientes.length === 0 && "No hay clientes "}
            {this.state.listaclientes.length > 0 &&
              "Hay " + this.state.listaclientes.length + " clientes"}
          </caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Código</th>
              <th>Razón Social</th>
              <th className="numped">Pedidos</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listaclientes.map(cli => (
              <Cliente
                key={cli.codigo}
                cliente={cli}
                onDelete={this.borrarCliente}
              />
            ))}
          </tbody>
          <tfoot>
            <tr className="table-danger">
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td className="numped">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => this.recargarClientes()}
                >
                  recargar
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
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

  recargarClientes() {
    this.setState({
      listaclientes: [...getClientes().representantes[0].clientes]
    });
  }
}

export default Tablaclientes;
