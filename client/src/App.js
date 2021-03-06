import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CloudinaryContext } from 'cloudinary-react';
import store from './store';
// Stylesheet

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Cart from './components/pages/Cart';
import Overview from './components/pages/Overview';
import Page404 from './components/pages/Page404';
import Wishlist from './components/pages/Wishlist';
import ProductCategory from './components/pages/ProductCategory';
import ScrollUpButton from './components/utils/ScrollUpButton';
import SetRedirect from './components/utils/SetRedirect';
import './resources/css/bootstrap-grid.min.css';
import './resources/css/main.min.css';
import 'animate.css';
//Admin
import Admin from './components/admin/Admin';

const App = () => {
	const [admin, setAdmin] = useState(false);
	useEffect(() => {
		setAdmin(window.location.pathname.includes('/admin'));
	}, [admin]);
	return (
		<Provider store={store}>
			<CloudinaryContext cloudName='deiecmpac'>
				<Router>
					{admin ? (
						<Fragment><Admin /></Fragment>
					) : (
							<Fragment>
								<Navbar />
								<Switch>
									<Route exact path='/' component={Home} />
									<Route exact path='/cart' component={Cart} />
									<Route exact path='/wishlist' component={Wishlist} />
									<Route exact path='/overview/:name' component={Overview} />
									<Route path='/products/' component={ProductCategory} />
									<Route component={Page404} />
								</Switch>
								<ScrollUpButton />
								<Footer />
							</Fragment>
						)}
					<SetRedirect />
				</Router>
			</CloudinaryContext>
		</Provider>
	);
};

export default App;
