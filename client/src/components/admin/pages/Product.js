import React, { useState, Fragment, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProductForm from '../Product/ProductForm';
import ProductDashboard from '../Product/ProductDashboard';
import SpeedDialButtons from '../include/SpeedDialButtons';
const useStyles = makeStyles(theme => ({
	root: {
		background: '#fff',
		padding: theme.spacing(5, 0, 5, 0)
	}
}));

const Product = () => {
	const classes = useStyles();
	const [page, setPage] = useState('');
	useEffect(() => {
		setPage(window.location.pathname);
	});
	const toRenderComponent = path => {
		switch (path) {
			case '/admin/product':
				return <ProductDashboard />;
			case '/admin/product/add':
				return <ProductForm />;
			default:
				return <ProductDashboard />;
		}
	};

	return (
		<div className={classes.root}>
			{toRenderComponent(page)}
			<SpeedDialButtons setPage={setPage} />
		</div>
	);
};

export default Product;
