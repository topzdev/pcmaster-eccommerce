import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { getVariety } from '../../../../controller/optionController/optionsActions';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

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
