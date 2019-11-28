import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import {
	getSubCategory,
	getVariety
} from '../../../../controller/optionController/optionsActions';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const SubCategoryDropdown = ({
	options: { subcategory },
	value,
	onChange,
	getSubCategory,
	getVariety
}) => {
	useEffect(() => {
		if (subcategory == null) getSubCategory();
	}, []);

	const onSelect = e => {
		onChange(e);
		getVariety({ subcategory: e.target.value });
	};

	return (
		<Fragment>
			<InputLabel id='subcategory'>Select Sub Category</InputLabel>
			<Select
				labelId='subcategory'
				value={value}
				name='subcategory'
				onChange={onSelect}
				autoWidth
			>
				{subcategory != null &&
					subcategory.map(category => (
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

export default connect(mapStateToProps, { getSubCategory, getVariety })(
	SubCategoryDropdown
);
