import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import { searchProduct } from '../../../../controller/productController/productActions';
const TableItem = ({ product: { current }, data, searchProduct }) => {
	const [redirect, setRedirect] = useState(false);
	const previewProduct = id => {
		console.log(id);
		if (id != null) searchProduct(id);
	};

	useEffect(() => {
		if (current != null) setRedirect(true);
	}, [current]);

	return (
		<Fragment>
			{redirect && <Redirect to='/admin/product/edit' />}
			<TableRow hover>
				<TableCell
					align={'left'}
					padding={'default'}
					component='th'
					scope='row'
				>
					{data.name}
				</TableCell>
				<TableCell>{data.barcode}</TableCell>
				<TableCell>{data.sku}</TableCell>
				<TableCell>{data.price}</TableCell>
				<TableCell>{data.quantity}</TableCell>
				<TableCell padding={'none'} align={'center'}>
					<IconButton
						aria-label='edit'
						margin={'none'}
						onClick={e => previewProduct(data._id)}
					>
						<EditIcon />
					</IconButton>
				</TableCell>
			</TableRow>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	product: state.product
});

export default connect(mapStateToProps, { searchProduct })(TableItem);
