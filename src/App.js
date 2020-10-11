import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import  "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router basename={'/portfolio'}>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
