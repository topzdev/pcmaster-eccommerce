import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({
	adminAuth: { isAuthenticated, loading },
	component: Component,
	...rest
}) => {
	return (
		<Route
			{...rest}
			render={props =>
				!isAuthenticated && !loading ? (
					<Redirect to='/admin/sign-in' />
				) : (
					<Component {...props} />
				)
			}
		></Route>
	);
};

const mapStateToProps = state => ({
	adminAuth: state.adminAuth
});

export default connect(mapStateToProps)(PrivateRoute);
