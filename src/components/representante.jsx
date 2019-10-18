import React, { Component } from "react";
//import Cliente from "./cliente";
import _ from "lodash";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class Representante extends Component {
  state = {
    sortColumn: { path: "codigo", order: "asc" }
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

  render() {
    const { repres } = this.props;
    const { sortColumn } = this.state;
    const listaclientes = repres.clientes;

    // console.log(
    //   `ordenamos los clientes del representante ${nombreRepre} por la columna ${ordenarPor} (${orden})`
    // );

    const listaOrdenada = _.orderBy(
      listaclientes,
      [sortColumn.path],
      [sortColumn.order]
    );

    const listaCampos = [
      { path: "codigo", label: "Cod" },
      { path: "rzs", label: "Cliente" },
      { path: "totalDocumentos", label: "Docs" },
      { path: "dummy", label: " " }
    ];
    return (
      <React.Fragment>
        <div className="row encab-representante">
          <h3>{repres.nombre}</h3>
        </div>
        <table className="table table-dark ">
          <TableHeader
            sortColumn={sortColumn}
            onSort={this.handleSortCustomers}
            listaCampos={listaCampos}
          />
          <TableBody listaElementos={repres.clientes} />

          <tfoot>
            <tr className="table-secondary">
              <td colSpan="3">
                {listaOrdenada.length === 0 && "No hay clientes "}
                {listaOrdenada.length > 0 &&
                  "Hay " + listaOrdenada.length + " clientes"}
              </td>

              <td className="numped">&nbsp;</td>
            </tr>
          </tfoot>
        </table>
      </React.Fragment>
    );
  }
}

export default Representante;
