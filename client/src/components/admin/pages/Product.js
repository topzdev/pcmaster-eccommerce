import React, { useState, Fragment, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddProduct from '../Product/AddProduct';
import ProductDashboard from '../Product/ProductDashboard';
import SpeedDialButtons from '../include/SpeedDialButtons';
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(3, 2, 5, 2),
		marginTop: '30px'
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
				return <AddProduct />;
			default:
				return <ProductDashboard />;
				break;
		}
	};

	return (
		<Fragment>
			<Container>
				<Paper className={classes.root}>{toRenderComponent(page)}</Paper>
			</Container>
			<SpeedDialButtons setPage={setPage} />
		</Fragment>
	);
};

export default Product;
