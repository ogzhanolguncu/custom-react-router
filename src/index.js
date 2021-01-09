import React from "react";
import ReactDOM from "react-dom";
import {Router, Link, Route, history} from "./router";
import {NotFound} from "./404";
import {routes} from "./routes";

import "./styles.css";

function App() {

  return (
    <Router routes={routes} NotFound={NotFound}>

      <Route path={routes.home.path}>
        <span className="badge">
          <span className="icon"/>
          <span className="name">GeoTargetly</span>
        </span>
      </Route>

      <Route path={routes.about.path}>
        <p>About</p>
        <Link to={routes.home.path}>Go to home</Link>
      </Route>

    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
