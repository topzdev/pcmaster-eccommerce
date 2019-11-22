import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Product from './pages/Product';
import '../../resources/css/admin.css';
const Admin = () => {
	useEffect(() => {}, []);
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route path='/admin/product' component={Product} />
			</Switch>
		</Fragment>
	);
};

export default Admin;
