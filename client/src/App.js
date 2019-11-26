import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// Stylesheet

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import ProductDetails from "./components/pages/ProductDetails";
import Search from "./components/pages/Search";
import Wishlist from "./components/pages/Wishlist";
import Collections from "./components/pages/Collections";
import ScrollUpButton from "./components/layout/utility/ScrollUpButton";
import "./resources/css/bootstrap-grid.min.css";
import "./resources/css/main.min.css";
//Admin
import Admin from "./components/admin/Admin";
const App = () => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        setAdmin(window.location.pathname.includes("/admin"));
    }, [admin]);
    return (
        <Provider store={store}>
            <Router>
                {admin ? (
                    <Fragment>
                        {" "}
                        <Admin />
                    </Fragment>
                ) : (
                    <Fragment>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/cart" component={Cart} />
                            <Route
                                exact
                                path="/overview"
                                component={ProductDetails}
                            />
                            <Route exact path="/search" component={Search} />
                            <Route
                                exact
                                path="/wishlist"
                                component={Wishlist}
                            />
                            <Route
                                exact
                                path="/collections"
                                component={Collections}
                            />
                        </Switch>
                        <ScrollUpButton />
                        <Footer />
                    </Fragment>
                )}
            </Router>
        </Provider>
    );
};

export default App;
