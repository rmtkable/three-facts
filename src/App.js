import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css"; // Import your CSS file
import Home from "./components/Home.js";
import FunFact1 from "./components/FunFact1.js";
import FunFact2 from "./components/FunFact2.js";
import FunFact3 from "./components/FunFact3.js";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/fact1" component={FunFact1} />
          <Route path="/fact2" component={FunFact2} />
          <Route path="/fact3" component={FunFact3} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
