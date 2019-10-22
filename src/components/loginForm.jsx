import React, { Component } from "react";
class LoginForm extends Component {
  username = React.createRef();
  password = React.createRef();

  state = {};

  //   componentDidMount = () => this.password.current.focus();

  handleSubmit = e => {
    e.preventDefault();
    const username = this.username.current.value;
    console.log("submitted " + username);
  };
  render() {
    return (
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              ref={this.username}
              id="username"
              type="text"
              gh
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              autoFocus
              ref={this.password}
              id="password"
              type="text"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary">Validar</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
