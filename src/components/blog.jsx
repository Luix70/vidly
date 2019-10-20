import React, { Component } from "react";
import {Link} from "react-router-dom";
class Blog extends Component {
  render() {
    const { user: autor } = this.props;
    const {mes,anno} = this.props.match.params
    return (
      <React.Fragment>
        <h1>Blog de {autor}</h1>
        <ul>
            <li><Link to="/blog/enero">Enero</Link></li>
            <li><Link to="/blog/febrero">Febrero</Link></li>
            <li><Link to="/blog/marzo">Marzo</Link></li>
            <li><span>...</span></li>
            <li><Link to="/blog"><em>  Todos</em></Link></li>
        </ul>
        <h3>mes: {mes|| "todos"} - Año: {anno || "2019" }</h3>
      </React.Fragment>
    );
  }
}

export default Blog;
