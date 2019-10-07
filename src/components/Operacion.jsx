import React, { Component } from "react";

class Operacion extends Component {
  state = { doc: this.props.documento };
  render() {
    var doc = this.state.doc;
    return (
      <tr>
        {doc.tipodoc} {doc.codigodoc} Fecha:
        {doc.fechapedido.replace(" 0:00:00", "")} Ref: {doc.referencia}
      </tr>
    );
  }
}

export default Operacion;
