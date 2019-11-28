import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';

import {
	getTags,
	getBrand,
	getCategory,
	getVariety,
	getSubCategory
} from '../../../../controller/optionController/optionsActions';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250
		}
	}
};

const useStyles = makeStyles(theme => ({
	chips: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2
	}
}));

const TagDropdown = ({
	options: { tags, brands, categories, subcategory, varieties },
	value,
	onChange,
	getTags
}) => {
	const classes = useStyles();

	useEffect(() => {
		if (!tags) getTags();
		if (!brands) getBrand();
		if (!categories) getCategory();
		if (!subcategory) getSubCategory();
		if (!varieties) getVariety();
	}, []);
	return (
		<Fragment>
			<InputLabel id='tags'>Select Tag</InputLabel>
			<Select
				labelId='tags'
				multiple
				value={value}
				name='tags'
				onChange={onChange}
				autoWidth
				input={<Input id='select-multiple-chip' />}
				renderValue={selected => (
					<div className={classes.chips}>
						{selected.map(tag => (
							<Chip key={tag} label={tag} className={classes.chip} />
						))}
					</div>
				)}
				MenuProps={MenuProps}
			>
				{tags != null &&
					tags.map(tag => (
						<MenuItem key={tag._id} value={tag.title}>
							{tag.title}
						</MenuItem>
					))}

				{brands != null &&
					brands.map(brand => (
						<MenuItem key={brand._id} value={brand.title}>
							{brand.title}
						</MenuItem>
					))}
				{categories != null &&
					categories.map(category => (
						<MenuItem key={category._id} value={category.title}>
							{category.title}
						</MenuItem>
					))}
				{subcategory != null &&
					subcategory.map(sub => (
						<MenuItem key={sub._id} value={sub.title}>
							{sub.title}
						</MenuItem>
					))}
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

export default connect(mapStateToProps, { getTags, getCategory, getBrand })(
	TagDropdown
);
