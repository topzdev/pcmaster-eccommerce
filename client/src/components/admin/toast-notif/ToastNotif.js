import React, { useEffect, useState } from 'react';
import { useToast } from 'react-toast-notifications';
import { connect } from 'react-redux';
const ToastNotif = ({ options, product }) => {
	const { addToast } = useToast();
	const toastVal = {
		content: '',
		type: ''
	};
	const [toast, setToast] = useState(toastVal);
	useEffect(() => {}, [
		options.error,
		product.error,
		product.success,
		options.success
	]);
	return <div>{addToast(toast.content, { appearance: toast.type })}</div>;
};

const mapStateToProps = state => ({
	options: state.options,
	product: state.product
});

export default connect(mapStateToProps)(ToastNotif);
