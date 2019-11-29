import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableToolbar from './TableToolBar';
import TableItem from './TableItem';
import TableHeader from './TableHeader';
import { getProducts } from '../../../../controller/productController/productActions';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3)
	},
	paper: {
		width: '100%',
		marginBottom: theme.spacing(2)
	},
	table: {
		minWidth: 750
	},
	tableWrapper: {
		overflowX: 'auto'
	},
	visuallyHidden: {
		border: 0,
		clip: 'rect(0 0 0 0)',
		height: 1,
		margin: -1,
		overflow: 'hidden',
		padding: 0,
		position: 'absolute',
		top: 20,
		width: 1
	}
}));

const ProductTable = ({ product: { products, loading }, getProducts }) => {
	const classes = useStyles();
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	useEffect(() => {
		if (products === null) getProducts();
	}, []);

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = event => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<TableToolbar />
				<div className={classes.tableWrapper}>
					<Table
						className={classes.table}
						aria-labelledby='tableTitle'
						size='medium'
						aria-label='enhanced table'
					>
						<TableHeader />
						{loading && (
							<Grid align={'center'} xs={12}>
								{' '}
								<CircularProgress />
							</Grid>
						)}
						<TableBody>
							{products != null &&
								products.map(item => <TableItem key={item._id} data={item} />)}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component='div'
					count={products != null ? products.length : 0}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'previous page'
					}}
					nextIconButtonProps={{
						'aria-label': 'next page'
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
	);
};
const mapStateToProps = state => ({
	product: state.product
});
export default connect(mapStateToProps, { getProducts })(ProductTable);
