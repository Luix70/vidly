import React, { Component } from "react";
import _ from "lodash";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody.jsx";
import Cliente from "./cliente"
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
      { path: "codigo", label: "Cod",content : (item) => <Cliente key={item.codigo} cliente={item} /> , colSpan: "4" , width:"15%"},
      { path: "rzs", label: "Cliente" , colSpan: "0" ,  width:"60%" },
      { path: "totalDocumentos", label: "Docs" , colSpan: "0" , width:"15%" },
      { path: "dummy", label: " " , colSpan: "0" , width:"10%"}
    ];

 

    return (
      <React.Fragment>
        <div className="row encab-representante">
          <span>Representante: {repres.nombre}</span>
        </div>
        <table className="table table-dark ">
          <TableHeader
            sortColumn={sortColumn}
            onSort={this.handleSortCustomers}
            listaCampos={listaCampos}
          />
          <TableBody listaElementos={listaOrdenada} listaCampos = {listaCampos}  campoClave={"codigo"}/>
        
        </table>
      </React.Fragment>
    );
  }
}

export default Representante;
