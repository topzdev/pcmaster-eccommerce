import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import TableHead from '@material-ui/core/TableHead';
import EditIcon from '@material-ui/icons/Edit';

import EnhancedTableToolbar from './TableToolBar';
import { getProducts } from '../../../../actions/productActions';

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

const EnhancedTable = ({ product: { products }, getProducts }) => {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
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
			{console.log(products)}
			<Paper className={classes.paper}>
				<EnhancedTableToolbar />
				<div className={classes.tableWrapper}>
					<Table
						className={classes.table}
						aria-labelledby='tableTitle'
						size='medium'
						aria-label='enhanced table'
					>
						<TableHead>
							<TableRow>
								<TableCell
									align={'left'}
									padding={'default'}
									component='th'
									scope='row'
								>
									Name
								</TableCell>
								<TableCell align={'left'}>Barcode</TableCell>
								<TableCell align={'left'}>Sku</TableCell>
								<TableCell align={'left'}>Price</TableCell>
								<TableCell align={'left'}>Quantity</TableCell>
								<TableCell align={'left'}>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{products != null &&
								products.map(product => (
									<TableRow key={product._id} hover>
										<TableCell
											align={'left'}
											padding={'default'}
											component='th'
											scope='row'
										>
											{product.name}
										</TableCell>
										<TableCell>{product.barcode}</TableCell>
										<TableCell>{product.sku}</TableCell>
										<TableCell>{product.price}</TableCell>
										<TableCell>{product.quantity}</TableCell>
										<TableCell padding={'none'}>
											<IconButton aria-label='edit' margin={'none'}>
												<EditIcon />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
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
export default connect(mapStateToProps, { getProducts })(EnhancedTable);
