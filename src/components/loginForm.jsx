import React from "react";
import Joi from "@hapi/joi";
import Form from "./common/form";
class LoginForm extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  objSchema = {
    username: Joi.string()
      .alphanum()
      .min(8)
      .max(30)
      .required()
      .label("Usuario"),
    password: Joi.string()
      .alphanum()
      .min(8)
      .max(30)
      .required()
      .label("Contraseña")
  };
  schema = Joi.object(this.objSchema);

  doSubmit = () => {
    this.props.history.replace("/ar");
  };

  render() {
    return (
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Usuario")}
          {this.renderInput("password", "Contraseña", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
