import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Search from './pages/Search';
const Main = () => {
	return (
		<div>
			<Navbar />
			<Router>
				<Switch>
					<Route path='/' component={Home} />
					<Route path='/cart' component={Cart} />
					<Route path='/overview' component={ProductDetails} />
					<Route path='/search' component={Search} />
				</Switch>
			</Router>
			<Footer />
		</div>
	);
};

export default Main;
