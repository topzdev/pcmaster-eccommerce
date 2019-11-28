import React, { useState, Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ProductForm from '../product/ProductForm';
import ProductDashboard from '../product/ProductDashboard';
import ProductCategory from '../product/ProductCategory';
import ProductSubCategory from '../product/ProductSubCategory';
import ProductVariety from '../product/ProductVariety';
import ProductTag from '../product/ProductTag';
import ProductBrand from '../product/ProductBrand';
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
			case '/admin/product':
				return <ProductDashboard />;
			case '/admin/product/add':
				return <ProductForm />;
			case '/admin/product/edit':
				if (current != null) {
					return <ProductForm />;
				} else setRedirect({ open: true, url: '/admin/product' });
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
