import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

import { connect } from 'react-redux';
import ProductList from './list/ProductList';
import CategoryDropdown from './dropdowns/CategoryDropdown';
import _ from 'lodash';

import {
	getSubCategory,
	addSubCategory,
	deleteSubCategory,
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

const ProductSubCategory = ({
	options: { subcategory, success, error },
	getSubCategory,
	addSubCategory,
	deleteSubCategory,
	setError
}) => {
	const initialState = {
		title: '',
		category: ''
	};
	const classes = useStyles();
	const [data, setData] = useState(initialState);

	useEffect(() => {
		if (subcategory === null) getSubCategory();
	}, []);

	useEffect(() => {
		if (success) {
			setError(null);
			clearField();
		}
	}, [success]);

	const onChange = e => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onAddSubCategory = () => {
		addSubCategory(data);
	};

	const onDelSubCategory = _id => {
		deleteSubCategory(_id);
	};

	const clearField = () => {
		setData({ ...data, ['title']: '' });
	};

	return (
		<div>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<h1>Product SubCategory</h1>
					<Grid item xs={12}>
						<FormControl style={{ width: '100%', marginBottom: '5px' }}>
							<CategoryDropdown value={data.category} onChange={onChange} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<div className={classes.grid}>
							<div style={{ flex: 1 }}>
								<TextField
									margin='dense'
									name='title'
									value={data.title}
									label={'Add Sub Category'}
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
									onClick={onAddSubCategory}
								>
									<AddIcon />
								</Fab>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<ProductList
						data={subcategory}
						onDelete={onDelSubCategory}
						title={'SubCategory'}
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
	getSubCategory,
	addSubCategory,
	deleteSubCategory,
	setError
})(ProductSubCategory);
