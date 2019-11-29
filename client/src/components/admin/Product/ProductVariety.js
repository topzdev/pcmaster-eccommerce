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
import SubCategoryDropdown from './dropdowns/SubCategoryDropdown';
import CategoryDropdown from './dropdowns/CategoryDropdown';
import _ from 'lodash';

import {
	getVariety,
	addVariety,
	deleteVariety,
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

const ProductVariety = ({
	options: { varieties, success, error },
	getVariety,
	addVariety,
	deleteVariety,
	setError
}) => {
	const initialState = {
		title: '',
		category: '',
		subcategory: ''
	};
	const classes = useStyles();
	const [data, setData] = useState(initialState);

	useEffect(() => {
		if (varieties === null) getVariety();
	}, []);

	useEffect(() => {
		if (success) {
			setError(null);
			clearField();
		}
	}, [success]);

	const onChange = e => setData({ ...data, [e.target.name]: e.target.value });

	const onAddVariety = () => {
		addVariety(data);
	};

	const onDelVariety = _id => {
		deleteVariety(_id);
	};

	const clearField = () => {
		setData({ ...data, ['title']: '' });
	};

	return (
		<div>
			<Grid container spacing={5}>
				<Grid item xs={6}>
					<h1>{'Product Variety'}</h1>
					<Grid item xs={12}>
						<FormControl style={{ width: '100%', marginBottom: '5px' }}>
							<CategoryDropdown value={data.category} onChange={onChange} />
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl style={{ width: '100%', marginBottom: '5px' }}>
							<SubCategoryDropdown
								value={data.subcategory}
								onChange={onChange}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<div className={classes.grid}>
							<div style={{ flex: 1 }}>
								<TextField
									margin='dense'
									name='title'
									value={data.title}
									label={'Variety Title'}
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
									onClick={onAddVariety}
								>
									<AddIcon />
								</Fab>
							</div>
						</div>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<ProductList
						data={varieties}
						onDelete={onDelVariety}
						title={'Variety'}
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
	getVariety,
	addVariety,
	deleteVariety,
	setError
})(ProductVariety);
