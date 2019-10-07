import React, { Component } from "react";
import Operacion from "./Operacion";
class Cliente extends Component {
  state = { cliente: this.props.cliente };
  render() {
    var cli = this.state.cliente;

    return (
      <React.Fragment>
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
              onClick={() => this.props.onDelete(cli.codigo)}
            >
              borrar
            </button>
          </td>
        </tr>
        <tr key={cli.codigo + "-ops"}>
          <td>&nbsp;</td>
          <td colSpan="3">
            <table className="table table-dark table-sm">
              <thead></thead>
              <tbody>
                {cli.documentos.map(doc => (
                  <Operacion
                    key={doc.tipodoc + doc.codigodoc}
                    documento={doc}
                  />
                ))}
              </tbody>
              <tfoot></tfoot>
            </table>
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default Cliente;
