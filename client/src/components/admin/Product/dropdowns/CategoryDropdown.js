import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getCategory } from '../../../../actions/optionsActions';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const CategoryDropdown = ({
	options: { categories },
	value,
	onChange,
	getCategory
}) => {
	useEffect(() => {
		if (categories != null) getCategory();
	}, []);
	return (
		<Fragment>
			<InputLabel id='category'>Category</InputLabel>
			<Select
				labelId='category'
				value={value}
				name='category'
				onChange={onChange}
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

export default connect(mapStateToProps, { getCategory })(CategoryDropdown);
