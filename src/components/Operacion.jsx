import React from "react";
// al ser una SFC no se requiere importar Component
const Operacion = ({ documento: doc }) => {
  return (
    <React.Fragment>
      <tr>
        <td className="celdaDocumento">
          <span className={"tipodoc tipodoc-" + doc.tipodoc}>
            {doc.tipodoc}
          </span>{" "}
          {doc.codigodoc}
        </td>
        <td className="celdaFecha">
          Fecha:
          {doc.fechapedido.replace(" 0:00:00", "")}
        </td>
        <td className="celdaReferencia">Ref: {doc.referencia}</td>
        <td className="celdaEtiqImporte">Bruto: </td>
        <td className="celdaImporte">
          <b>{doc.Importebruto} </b>€
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colSpan="4" className="lineas"></td>
      </tr>
    </React.Fragment>
  );
};

export default Operacion;
