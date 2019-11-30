import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Product from './pages/Product';
import Home from './pages/Home';
import SignInPage from './auth/SignInPage';
import { SnackbarProvider } from 'notistack';
import ToastNotif from './toast-notif/ToastNotif';
import setAuthToken from '../../utils/setAuthToken';
import { connect } from 'react-redux';
import { checkAdmin } from '../../controller/authController/admin/authActions';
import PrivateRoute from './routing/AdminRoute';
if (localStorage.token) setAuthToken(localStorage.token);

const Admin = ({ adminAuth: { isAuthenticated }, checkAdmin, history }) => {
	useEffect(() => {
		checkAdmin();
	}, []);
	return (
		<Fragment>
			{isAuthenticated && <Navbar />}
			<SnackbarProvider>
				<Switch>
					{/* <PrivateRoute path='/admin/' component={Home} /> */}
					<PrivateRoute path='/admin/product' component={Product} />
					<Route path='/admin/sign-in' component={SignInPage} />
				</Switch>
				<ToastNotif />
			</SnackbarProvider>
		</Fragment>
	);
};
const mapStateToProps = state => ({
	adminAuth: state.adminAuth
});
export default connect(mapStateToProps, { checkAdmin })(Admin);
