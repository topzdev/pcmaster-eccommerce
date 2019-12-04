import React, { useState, Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProductForm from '../Product/ProductForm';
import ProductDashboard from '../Product/ProductDashboard';
import ProductCategory from '../Product/ProductCategory';
import ProductSubCategory from '../Product/ProductSubCategory';
import ProductVariety from '../Product/ProductVariety';
import ProductTag from '../Product/ProductTag';
import ProductBrand from '../Product/ProductBrand';
import SpeedDialButtons from '../include/SpeedDialButtons';

import { connect } from 'react-redux';

import { setRedirect } from '../../../controller/utitlityController/utilityActions';
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(5, 0, 5, 0),
		position: 'relative'
	},
	container: {
		background: '#fff',
		padding: theme.spacing(5, 5)
	}
}));

const Product = ({ product: { current }, setRedirect }) => {
	const classes = useStyles();
	const [page, setPage] = useState('');
	useEffect(() => {
		setPage(window.location.pathname);
	});
	const toRenderComponent = path => {
		switch (path) {
			case '/admin/product/':
				return <ProductDashboard />;
			case '/admin/product/add':
				return <ProductForm />;
			case '/admin/product/edit':
				return <ProductForm />;
			// if (current != null) {
			// 	return <ProductForm />;
			// } else setRedirect({ open: true, url: '/admin/product' });
			case '/admin/product/category':
				return <ProductCategory />;
			case '/admin/product/sub-category':
				return <ProductSubCategory />;
			case '/admin/product/variety':
				return <ProductVariety />;
			case '/admin/product/tag':
				return <ProductTag />;
			case '/admin/product/brand':
				return <ProductBrand />;
			default:
				return <ProductDashboard />;
		}
	};

	return (
		<div className={classes.root}>
			<SpeedDialButtons setPage={setPage} />
			<Container className={classes.container}>
				{toRenderComponent(page)}
			</Container>
		</div>
	);
};

const mapStateToProp = state => ({
	product: state.product
});

export default connect(mapStateToProp, { setRedirect })(Product);
