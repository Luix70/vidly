import React, { Component } from "react";
class LoginForm extends Component {
  userRef = React.createRef();
  passRef = React.createRef();

  state = { account: { username: "", password: "" } };

  handleSubmit = e => {
    e.preventDefault();
    const username = this.userRef.current.value;
    console.log("submitted " + username);
  };

  handleChange = ({ currentTarget: input }) => {
    //recuperamos el valor de la cuenta del estado
    const account = { ...this.state.account };
    //cambiamos el valor que proceda
    account[input.name] = input.value;
    // y actualizamos de nuev el estado
    this.setState({ account: account });
  };

  componentDidMount = () => this.userRef.current.focus();

  render() {
    const { account } = this.state;
    return (
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              name="username"
              id="username"
              type="text"
              ref={this.userRef}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="form-control"
              ref={this.passRef}
            />
          </div>
          <button className="btn btn-primary">Validar</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
