import React, { Component } from "react";
import { Switch, Route } from "react-router-dom"
import "./App.css";
import "bulma/css/bulma.css";

import { Detail } from "./pages/Detail";
import { Title } from "./components/Title";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title>Mu-Movie</Title>
        <Switch>
          <Route exact path='/' component={ Home } />
          <Route path='/detail/:movieId' component={ Detail } />
          <Route component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
