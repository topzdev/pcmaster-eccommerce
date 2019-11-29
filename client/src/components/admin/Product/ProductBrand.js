import React, { useEffect, useState } from './node_modules/react';
import Grid from './node_modules/@material-ui/core/Grid';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import TextField from './node_modules/@material-ui/core/TextField';
import Fab from './node_modules/@material-ui/core/Fab';
import AddIcon from './node_modules/@material-ui/icons/Add';
import EditIcon from './node_modules/@material-ui/icons/Edit';
import { connect } from './node_modules/react-redux';
import ProductList from './list/ProductList';
import _ from './node_modules/lodash';

import {
	getBrand,
	addBrand,
	deleteBrand,
	setError
} from '../../../controller/optionController/optionsActions';

const useStyles = makeStyles(theme => ({
	grid: {
		display: 'flex',
		flexGrow: 1,
		flexDirection: 'row',
		width: '100%'
	}
}));

const ProductBrand = ({
	options: { brands, success },
	getBrand,
	addBrand,
	deleteBrand,
	setError
}) => {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	useEffect(() => {
		if (brands === null) getBrand();
	}, []);

	useEffect(() => {
		if (success) {
			setError(null);
			clearField();
		}
	}, [success]);

	const onChange = e => setTitle(e.target.value);

	const onAddBrand = () => {
		addBrand({ title });
		clearField();
	};

	const onDelCategory = _id => {
		deleteBrand(_id);
		clearField();
	};

	const clearField = () => {
		setTitle('');
	};

	return (
		<div>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<h1>Product Brand</h1>
					<Grid item xs={12}>
						<div>
							<div className={classes.grid}>
								<div style={{ flex: 1 }}>
									<TextField
										margin='dense'
										name='title'
										value={title}
										label='Enter Brand title here'
										fullWidth
										onChange={onChange}
									/>
								</div>
								<div style={{ flex: 0 }}>
									<Fab
										color='primary'
										aria-label='add'
										mt={2}
										style={{ marginLeft: 'auto' }}
										onClick={onAddBrand}
									>
										<AddIcon />
									</Fab>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<ProductList data={brands} onDelete={onDelCategory} title={'Brand'} />
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, {
	getBrand,
	addBrand,
	deleteBrand,
	setError
})(ProductBrand);
