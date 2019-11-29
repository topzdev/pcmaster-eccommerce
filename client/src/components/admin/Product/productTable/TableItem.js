import React, { Fragment, useEffect, useState } from './node_modules/react';
import { Redirect } from './node_modules/react-router-dom';
import TableCell from './node_modules/@material-ui/core/TableCell';
import TableRow from './node_modules/@material-ui/core/TableRow';
import IconButton from './node_modules/@material-ui/core/IconButton';
import EditIcon from './node_modules/@material-ui/icons/Edit';
import { connect } from './node_modules/react-redux';
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
