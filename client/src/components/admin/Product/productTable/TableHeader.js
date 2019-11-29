import React, { Fragment } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const TableHeader = () => {
	return (
		<Fragment>
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
		</Fragment>
	);
};

export default TableHeader;
