import React, { useEffect, Fragment } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { getVariety } from '../../../../controller/optionController/optionsActions';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import Select from './node_modules/@material-ui/core/Select';

const SubCategoryDropdown = ({
	options: { varieties },
	value,
	onChange,
	getVariety
}) => {
	useEffect(() => {
		if (varieties === null) getVariety();
	}, []);

	return (
		<Fragment>
			<InputLabel id='vary'>Select Variety</InputLabel>
			<Select
				labelId='vary'
				value={value}
				name='variety'
				onChange={onChange}
				autoWidth
			>
				{varieties != null &&
					varieties.map(vary => (
						<MenuItem key={vary._id} value={vary.title}>
							{vary.title}
						</MenuItem>
					))}
			</Select>
		</Fragment>
	);
};

const mapStateToProps = state => ({
	options: state.options
});

export default connect(mapStateToProps, { getVariety })(SubCategoryDropdown);
