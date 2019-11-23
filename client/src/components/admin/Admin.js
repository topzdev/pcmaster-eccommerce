import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Navbar from './layout/Navbar';
import Product from './pages/Product';
import ToastNotif from './toast-notif/ToastNotif';
import '../../resources/css/admin.css';
const Admin = () => {
	useEffect(() => {}, []);
	return (
		<Fragment>
			<Navbar />

			<Switch>
				<ToastProvider>
					<ToastNotif />
					<Route path='/admin/product' component={Product} />
				</ToastProvider>
			</Switch>
		</Fragment>
	);
};

export default Admin;
