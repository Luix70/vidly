import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" } };

  handleSubmit = e => {
    e.preventDefault();

    console.log("submitted ");
  };

  handleChange = ({ currentTarget: input }) => {
    //recuperamos el valor de la cuenta del estado
    const account = { ...this.state.account };
    //cambiamos el valor que proceda
    account[input.name] = input.value;
    // y actualizamos de nuev el estado
    this.setState({ account: account });
  };

  render() {
    const { account } = this.state;
    return (
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            onChange={this.handleChange}
            name={"username"}
            label={"Usuario"}
          />
          <Input
            value={account.password}
            onChange={this.handleChange}
            name={"password"}
            label={"Contraseña"}
          />

          <button className="btn btn-primary">Validar</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
