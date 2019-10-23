import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import AreaReservada from "./components/areaReservada";
import Blog from "./components/blog";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Dashboard from "./components/admin/dashboard";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Scans from "./components/scans";
import "./App.css";

class App extends Component {
  render() {
    const rutaBlog = props => <Blog user="Luis" {...props} />;

    return (
      <main>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/ar" component={AreaReservada} />
            <Route path="/login" component={LoginForm} />
            <Route path="/blog/:mes?/:anno?" render={rutaBlog} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/registro" component={RegisterForm} />
            <Route path="/scans/:td/:cd" component={Scans} />
            <Redirect from="/mensajes" to="/blog?sortBy=oldest&verified=true" />
            <Route exact path="/" component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
