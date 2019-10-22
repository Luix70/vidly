import React, { Component } from "react";
import Input from "./common/input";
import Joi from "@hapi/joi";

class LoginForm extends Component {
  state = { account: { username: "", password: "" }, errors: {} };

  schema = Joi.object({
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
  });

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return console.log("No enviado");
    //procedimiento as seguir si no hay errores. p.ej: reenvio al área reservada

    this.props.history.replace("/ar");
  };

  validate = () => {
    const result = this.schema.validate(this.state.account, {
      abortEarly: false
    });

    if (!result.error) return null;

    //el objeto error contiene un array details que vamos a mapear
    const errors = {}; //en principio, es un objeto vacio

    for (let item of result.error.details) errors[item.path[0]] = item.message;
    //item.path es un array con un solo elemento, por eso obtenemos su valos así
    return errors;
  };

  validateProperty = input => {
    if (input.name === "username") {
      if (input.value.trim() === "")
        return "El campo Usuario no puede estar vacio";
      if (input.value.trim().length < 8)
        return "El campo Usuario ha de tener 8 caracterers o más";

      // otras comprobaciones pertinentes
    }

    if (input.name === "password") {
      if (input.value.trim() === "")
        return "El campo Contraseña no puede estar vacio";
      // otras comprobaciones pertinentes
    }
  };

  handleChange = ({ currentTarget: input }) => {
    //recuperamos el valor de la cuenta del estado
    const account = { ...this.state.account };
    //cambiamos el valor que proceda
    account[input.name] = input.value;

    //ahora comprobamos si con los nuevos valores se ha producido algun error
    //en primer lugar clonamos el estado actual de errors
    const errors = { ...this.state.errors };
    //implementamos un nuevo método en el que evaluamos
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    // y actualizamos de nuev el estado
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div className="formContainer">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            value={account.username}
            onChange={this.handleChange}
            name={"username"}
            label={"Usuario"}
            error={errors.username}
          />
          <Input
            value={account.password}
            onChange={this.handleChange}
            name={"password"}
            label={"Contraseña"}
            error={errors.password}
          />

          <button className="btn btn-primary">Validar</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
