import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';
const ToastNotif = ({ options, product }) => {
	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		let error = options.error;
		console.log(error);
		if (error != null) {
			enqueueSnackbar(error.msg || error.msg.errors[0].msg, {
				variant: error.type
			});
		}

		let success = options.success;
		console.log(success);
		if (success != null)
			enqueueSnackbar(success.msg, { variant: success.type });
	}, [options.error, options.success]);
	return <Fragment></Fragment>;
};

const mapStateToProps = state => ({
	options: state.options,
	product: state.product
});

export default connect(mapStateToProps)(ToastNotif);
