import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CreateTest from "./components/create-test.component";
import Navbar from "./components/navbar.component";
import TestsList from "./components/list-test.component"

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={TestsList} />
        <Route path="/create" component={CreateTest} />
      </div>
    </Router>
  );
}

export default App;
