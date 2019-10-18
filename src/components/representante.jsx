import React from "react";
import Cliente from "./cliente";
import _ from "lodash";
import TableHeader from "./common/tableHeader";

const Representante = ({ repres, onSort, sortColumn }) => {
  const listaclientes = repres.clientes;
  const ordenarPor = sortColumn.path;
  const orden = sortColumn.order;

  // console.log(
  //   `ordenamos los clientes del representante ${nombreRepre} por la columna ${ordenarPor} (${orden})`
  // );

  const listaOrdenada = _.orderBy(listaclientes, [ordenarPor], [orden]);
  const ordenIcon = "fa fa-sort-" + orden;

  return (
    <React.Fragment>
      <div className="row encab-representante">
        <h3>{repres.nombre}</h3>
      </div>
      <table className="table table-dark ">
        <TableHeader
          ordenarPor={ordenarPor}
          ordenIcon={ordenIcon}
          onSort={onSort}
          listaCampos={["codigo", "rzs", "totalDocumentos", " "]}
          listaEtiquetas={["Cod", "Cliente", "Docs", ""]}
        />
        <tbody>
          {listaOrdenada.map(cli => (
            <Cliente key={cli.codigo} cliente={cli} />
          ))}
        </tbody>
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
};

export default Representante;
