import React, { Component } from "react";
import getScans from "../services/archivos";

import DocView from "./common/docView";

class Scans extends Component {
  componentDidMount = async () => {
    const { cd, td } = this.props.match.params;

    const scans = await getScans(td, cd, 3);

    this.setState({ scans: scans, cd: cd, td: td });
  };

  handleClick = (ruta, tipo) => {
    const apiEndPoint = "http://indesan.ddns.net:52608/JData.asmx";

    const { cd, td } = this.state;

    window.location.href =
      apiEndPoint +
      "/JTransferScan?ruta=" +
      ruta +
      "&cd=" +
      cd +
      "&td=" +
      td +
      "&tipoArchivo=" +
      tipo;
  };

  state = { scans: [], cd: "", td: "", ta: "" };
  render() {
    return (
      <div className="cardContainer  row">
        {this.state.scans.map(scan => (
          <DocView
            key={scan.numerador}
            tipo={scan.TipoImagen}
            ruta={scan.ruta + "\\" + scan.documento}
            onClick={this.handleClick}
          ></DocView>
        ))}
      </div>
    );
  }
}

export default Scans;
