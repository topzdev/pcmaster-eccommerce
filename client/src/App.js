import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Stylesheet
import "./resources/css/bootstrap-grid.min.css";
import "./resources/css/main.min.css";

// Components
// import Menu from "./components/layout/Menu";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/ProductDetails";
import Search from "./components/pages/Search";
const App = () => {
  return (
    <Router>
      {/* <Menu /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/cart" component={Cart} />
        <Route exact path="/overview" component={ProductDetails} />
        <Route exact path="/search" component={Search} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
