import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Stylesheet
import "./resources/css/bootstrap-grid.min.css";
import "./resources/css/main.min.css";

// Components
import Navbar from "./components/layout/Navbar";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch></Switch>
        </Router>
    );
};

export default App;
