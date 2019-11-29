import React, { useEffect, Fragment } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import {
	getCategory,
	getSubCategory
} from '../../../../controller/optionController/optionsActions';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import Select from './node_modules/@material-ui/core/Select';

const CategoryDropdown = ({
	options: { categories },
	value,
	onChange,
	getCategory,
	getSubCategory
}) => {
	useEffect(() => {
		if (categories == null) getCategory();
	}, []);

	const onSelect = e => {
		onChange(e);
		console.log(e.target.value);
		getSubCategory(e.target.value);
	};

	return (
		<Fragment>
			<InputLabel id='category'>Select Category</InputLabel>
			<Select
				labelId='category'
				value={value}
				name='category'
				onChange={onSelect}
				autoWidth
			>
				{categories != null &&
					categories.map(category => (
						<MenuItem key={category._id} value={category.title}>
							{category.title}
						</MenuItem>
					))}
			</Select>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, { getCategory, getSubCategory })(
	CategoryDropdown
);
