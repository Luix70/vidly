import React, { Component } from "react";
import getClientes from "../services/fakeClientes";
class Tablaclientes extends Component {
  state = {
    listaclientes: [...getClientes().representantes[0].clientes],
    numclientes: 0
  };
  render() {
    return (
      <main className="container">
        <h1>
          {this.state.listaclientes.length === 0 && "No hay clientes "}

          {this.state.listaclientes.length > 0 &&
            "Hay " + this.state.listaclientes.length + " clientes"}
        </h1>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Razón Social</th>
              <th>Pedidos</th>

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
                <td>
                  <button
                    className="badge"
                    onClick={() => this.borrarCliente(cli.codigo)}
                  >
                    borrar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>

              <td>
                <button
                  className="badge"
                  onClick={() => this.recargarClientes()}
                >
                  recargar
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
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
    // console.log("recargamos todos los clientes ");
    var nuevaListaClientes = [...getClientes().representantes[0].clientes];
    // console.log("listaclientes", this.state.listaclientes);
    // console.log("nuevalistaClientes", nuevaListaClientes);
    this.setState({
      numclientes: 0,
      listaclientes: nuevaListaClientes
    });
  }
}

export default Tablaclientes;
