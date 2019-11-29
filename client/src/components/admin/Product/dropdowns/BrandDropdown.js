import React, { useEffect, Fragment } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { getBrand } from '../../../../controller/optionController/optionsActions';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import Select from './node_modules/@material-ui/core/Select';

const BrandDropdown = ({ options: { brands }, value, onChange, getBrand }) => {
	useEffect(() => {
		if (brands == null) getBrand();
	}, []);
	return (
		<Fragment>
			<InputLabel id='brand'>Select Brand</InputLabel>
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
