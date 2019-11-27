import React, { useState, Fragment, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ProductForm from '../Product/ProductForm';
import ProductDashboard from '../Product/ProductDashboard';
import SpeedDialButtons from '../include/SpeedDialButtons';
import { connect } from 'react-redux';
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(0, 0, 5, 0)
	}
}));

const Product = ({ product: { current } }) => {
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
			case '/admin/product/edit':
				if (current != null) return <ProductForm />;
			default:
				return <ProductDashboard />;
		}
	};

	return (
		<div className={classes.root}>
			<SpeedDialButtons setPage={setPage} />
			{toRenderComponent(page)}
		</div>
	);
};

const mapStateToProp = state => ({
	product: state.product
});

export default connect(mapStateToProp)(Product);
