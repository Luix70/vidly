import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import AreaReservada from "./components/areaReservada";
import Blog from "./components/blog";
import Home from "./components/home";
import NotFound from "./components/notFound";
import Dashboard from "./components/admin/dashboard";

class App extends Component {
  render() {
    const rutaBlog = props => <Blog user="Luis" {...props} />;

    return (
      <main style={{ backgroundColor: "#ddd" }}>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/ar" component={AreaReservada} />
            <Route path="/blog/:mes?/:anno?" render={rutaBlog} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/dashboard" component={Dashboard} />
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
