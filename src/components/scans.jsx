import React, { Component } from "react";
import getScans from "../services/archivos";
import PDFViewer from "pdf-viewer-reactjs";
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

    this.setState({
      rutaPDF:
        apiEndPoint +
        "/JTransferScan?ruta=" +
        ruta +
        "&cd=" +
        cd +
        "&td=" +
        td +
        "&tipoArchivo=" +
        tipo
    });
  };

  handleDown = (ruta, tipo) => {
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

  state = { scans: [], cd: "", td: "", ta: "", rutaPDF: "" };

  render() {
    return (
      <div className="d-flex">
        <div className="cardContainer  col-2">
          {this.state.scans.map(scan => (
            <DocView
              key={scan.numerador}
              tipo={scan.TipoImagen}
              ruta={scan.ruta + "\\" + scan.documento}
              onClick={this.handleClick}
            ></DocView>
          ))}
        </div>
        <div className="cardContainer col-10">
          {this.state.rutaPDF === "" ? null : (
            <PDFViewer
              document={{
                url: this.state.rutaPDF
              }}
            />
          )}
          <div className="cardContainer col-10">
            <button
              onClick={(() => this.handleDown(this.state.rutaPDF), "test")}
            >
              Descargar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Scans;
