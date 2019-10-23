import React, { Component } from "react";
import getScans from "../services/archivos";
class Scans extends Component {
  state = { scans: [] };
  render() {
    const { cd, td } = this.props.match.params;
    return <h1>Scans {cd + " - " + td}</h1>;
  }
}

export default Scans;
