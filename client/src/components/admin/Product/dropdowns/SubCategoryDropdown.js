import React, { useEffect, Fragment } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import {
	getSubCategory,
	getVariety
} from '../../../../controller/optionController/optionsActions';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import Select from './node_modules/@material-ui/core/Select';

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
