import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Stylesheet
import "./resources/css/bootstrap-grid.min.css";
import "./resources/css/main.min.css";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Menu from "./components/layout/Menu/Menu";
import Home from "./components/pages/Home";
const App = () => {
    return (
        <Router>
            <Navbar />
            <Menu />
            <Switch>
                <Home />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
