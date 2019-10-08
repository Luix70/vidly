import React from "react";
import Cliente from "./Cliente";

const TablaClientes = ({
  listaclientes,
  onBorrarCliente,
  onRecargarClientes
}) => {
  return (
    <div className="table-responsive">
      <table className="table   table-dark  table-sm ">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Código</th>
            <th>Razón Social</th>
            <th className="numped">Pedidos</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {listaclientes.map(cli => (
            <Cliente
              key={cli.codigo}
              cliente={cli}
              onDelete={() => {
                onBorrarCliente(cli.codigo);
              }}
            />
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-primary">
            <td colSpan="3">
              {" "}
              {listaclientes.length === 0 && "No hay clientes "}
              {listaclientes.length > 0 &&
                "Hay " + listaclientes.length + " clientes"}
            </td>

            <td className="numped">
              <button
                className="btn btn-sm btn-warning"
                onClick={onRecargarClientes}
              >
                recargar
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TablaClientes;
