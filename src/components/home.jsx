import React, { Component } from "react";
class Home extends Component {
  goTo = ruta => {
    ruta === "/blog"
      ? this.props.history.push(ruta)
      : this.props.history.replace(ruta);
  };
  render() {
    return (
      <React.Fragment>
        <h1>Home</h1>
        <ul>
          <li>
            <button onClick={() => this.goTo("/blog")}>Blog</button>
          </li>
          <li>
            <button onClick={() => this.goTo("/ar")}>Area Reservada</button>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Home;
