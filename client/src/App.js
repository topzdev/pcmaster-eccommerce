import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Stylesheet
import "./resources/css/bootstrap-grid.min.css";
import "./resources/css/main.min.css";

// Components
import Navbar from "./components/layout/Navbar";
import Menu from "./components/layout/Menu/Menu";
import Banner from "./components/include/Banner";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Menu />
      <Switch>
        <Banner />
      </Switch>
    </Router>
  );
};

export default App;
