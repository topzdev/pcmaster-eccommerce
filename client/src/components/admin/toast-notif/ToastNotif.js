import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
const ToastNotif = ({ options, product }) => {
	const { enqueueSnackbar } = useSnackbar();

	//Alert toast for option
	useEffect(() => {
		alertToast(options.error, options.success);
	}, [options.error, options.success]);

	//Alert toast for product
	useEffect(() => {
		alertToast(product.error, product.success);
	}, [product.error, product.success]);

	const alertToast = (error, success) => {
		if (error != null) {
			if (Array.isArray(error.msg)) {
				error = Array.from(error.msg);
				error.map(err =>
					enqueueSnackbar(err.msg, {
						variant: 'error'
					})
				);
			} else {
				enqueueSnackbar(error.msg, {
					variant: 'error'
				});
			}
		}
		if (success != null) enqueueSnackbar(success.msg, { variant: 'success' });
	};

	return <Fragment></Fragment>;
};

const mapStateToProps = state => ({
	options: state.options,
	product: state.product
});

export default connect(mapStateToProps)(ToastNotif);
