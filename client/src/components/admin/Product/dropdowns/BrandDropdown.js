import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getBrand } from '../../../../actions/optionsActions';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const BrandDropdown = ({ options: { brands }, value, onChange, getBrand }) => {
	useEffect(() => {
		if (brands == null) getBrand();
	}, []);
	return (
		<Fragment>
			<InputLabel id='brand'>Brand</InputLabel>
			<Select
				labelId='brand'
				value={value}
				name='brand'
				onChange={onChange}
				autoWidth
			>
				{brands != null &&
					brands.map(brand => (
						<MenuItem key={brand._id} value={brand.title}>
							{brand.title}
						</MenuItem>
					))}
			</Select>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, { getBrand })(BrandDropdown);
