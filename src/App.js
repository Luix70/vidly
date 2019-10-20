import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import AreaReservada from "./components/areaReservada";
import Blog from "./components/blog";
import Home from "./components/home";
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
            
            

            <Route path="/" component={Home} />
          </Switch>
        </div>
      </main>
    );
  }
}

export default App;
