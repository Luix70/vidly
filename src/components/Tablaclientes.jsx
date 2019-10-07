import React, { Component } from "react";
import getClientes from "../services/fakeClientes";
class Tablaclientes extends Component {
  state = {
    listaclientes: [...getClientes().representantes[0].clientes]
  };
  render() {
    return (
      <div className="table-responsive">
        <table className="table   table-bordered table-dark table-striped table-sm">
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
              <tr key={cli.codigo}>
                <td>
                  <strong>{cli.codigo}</strong>
                </td>
                <td>
                  <em> {cli.rzs}</em>
                </td>
                <td className="numped">{cli.totalDocumentos}</td>
                <td className="numped">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.borrarCliente(cli.codigo)}
                  >
                    borrar
                  </button>
                </td>
              </tr>
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

  borrarCliente(cod) {
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
  }

  recargarClientes() {
    this.setState({
      listaclientes: [...getClientes().representantes[0].clientes]
    });
  }
}

export default Tablaclientes;
