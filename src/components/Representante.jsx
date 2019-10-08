import React from "react";
import Cliente from "./Cliente";
const Representante = ({ repres }) => {
  var listaclientes = repres.clientes;
  return (
    <table className="table table-dark">
      <thead>
        <tr>
          <td colSpan="4">
            <h1>{repres.nombre}</h1>
          </td>
        </tr>
      </thead>
      <tbody>
        {listaclientes.map(cli => (
          <Cliente key={cli.codigo} cliente={cli} />
        ))}
      </tbody>
      <tfoot>
        <tr className="table-secondary">
          <td colSpan="3">
            {" "}
            {listaclientes.length === 0 && "No hay clientes "}
            {listaclientes.length > 0 &&
              "Hay " + listaclientes.length + " clientes"}
          </td>

          <td className="numped">&nbsp;</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default Representante;
