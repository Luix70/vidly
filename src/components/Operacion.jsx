import React, { Component } from "react";
const  Operacion = ({documento : doc}) => {
  return (
      <tr>
        {doc.tipodoc} {doc.codigodoc} Fecha:
        {doc.fechapedido.replace(" 0:00:00", "")} Ref: {doc.referencia}
      </tr>
    );
}
 
export default  Operacion;
