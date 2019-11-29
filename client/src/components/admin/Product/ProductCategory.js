import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';
import ProductList from './list/ProductList';
import _ from 'lodash';

import {
	getCategory,
	addCategory,
	deleteCategory,
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

const ProductCategory = ({
	options: { categories, success },
	getCategory,
	addCategory,
	deleteCategory,
	setError
}) => {
	const classes = useStyles();
	const [title, setTitle] = useState('');
	const [edit, setEdit] = useState(null);
	useEffect(() => {
		if (categories === null) getCategory();
	}, []);

	useEffect(() => {
		if (success) {
			setError(null);
			clearField();
		}
	}, [success]);

	const onChange = e => setTitle(e.target.value);

	const onAddCategory = () => {
		addCategory({ title });
		clearField();
	};

	const onDelCategory = _id => {
		deleteCategory(_id);
		clearField();
	};

	const clearField = () => {
		setTitle('');
	};

	return (
		<div>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<h1>Product Category</h1>
					<Grid item xs={12}>
						<div>
							<div className={classes.grid}>
								<div style={{ flex: 1 }}>
									<TextField
										margin='dense'
										name='title'
										value={title}
										label='Add Category'
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
										onClick={onAddCategory}
									>
										{edit ? <EditIcon /> : <AddIcon />}
									</Fab>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<ProductList
						data={categories}
						onDelete={onDelCategory}
						title={'Category'}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, {
	getCategory,
	addCategory,
	deleteCategory,
	setError
})(ProductCategory);
