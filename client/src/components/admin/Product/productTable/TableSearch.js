import React, { useState, useEffect } from './node_modules/react';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import IconButton from './node_modules/@material-ui/core/IconButton';
import TextField from './node_modules/@material-ui/core/TextField';
import MenuItem from './node_modules/@material-ui/core/MenuItem';
import FormControl from './node_modules/@material-ui/core/FormControl';
import Select from './node_modules/@material-ui/core/Select';
import InputAdornment from './node_modules/@material-ui/core/InputAdornment';
import InputLabel from './node_modules/@material-ui/core/InputLabel';
import SearchIcon from './node_modules/@material-ui/icons/Search';
import _ from './node_modules/lodash';
import { connect } from './node_modules/react-redux';

import CategoryDropdown from '../dropdowns/CategoryDropdown';
import BrandDropdown from '../dropdowns/BrandDropdown';
import TagDropdown from '../dropdowns/TagDropdown';
import { getProducts } from '../../../../controller/productController/productActions';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		alignItems: 'flex-end',
		marginLeft: 'auto'
	},
	input: {
		display: 'flex',
		flex: 1,
		width: '300px',
		marginRight: '5px'
	},
	select: {
		width: '200px'
	}
}));

const TableSearch = ({ getProducts }) => {
	const classes = useStyles();
	const [query, setQuery] = useState({});
	const [select, setSelect] = useState('name');
	const [options, setOptions] = useState({
		tags: [],
		category: '',
		brand: '',
		name: '',
		sku: '',
		barcode: ''
	});

	const onSelect = e => {
		setSelect(e.target.value);
		setQuery({ [e.target.value]: options[e.target.value] });
	};

	const onChange = e => {
		let name = e.target.name;
		setOptions({ ...options, [name]: e.target.value });
		setQuery({ [name]: e.target.value });
	};

	useEffect(() => {
		getProducts(!_.isEmpty(query[select]) ? query : {});
	}, [query]);

	const onClick = fields => {};

	const renderSelectedFields = selected => {
		switch (selected) {
			case 'category':
				return (
					<CategoryDropdown value={options.category} onChange={onChange} />
				);
			case 'brand':
				return <BrandDropdown value={options.brand} onChange={onChange} />;
			case 'tags':
				return <TagDropdown value={options.tags} onChange={onChange} />;
			default:
				return (
					<div className={classes.input}>
						<TextField
							fullWidth
							name={select}
							value={options[select]}
							label={`Search Product by ${_.capitalize(select)}`}
							className={classes.input}
							onChange={onChange}
							InputProps={{
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											onClick={() => onClick(options[select])}
											aria-label='delete'
											className={classes.iconButton}
										>
											<SearchIcon />
										</IconButton>
									</InputAdornment>
								)
							}}
						/>
					</div>
				);
				break;
		}
	};

	return (
		<div className={classes.root}>
			<FormControl className={classes.input}>
				{renderSelectedFields(select)}
			</FormControl>
			<FormControl>
				<InputLabel
					style={{ width: '100%' }}
					id='filter'
				>{`Search Product ${_.capitalize(select)}`}</InputLabel>
				<Select
					labelId='filter'
					id='filter'
					value={select}
					label='Search Filters'
					onChange={onSelect}
					className={classes.select}
				>
					<MenuItem value={'name'}>Product Name</MenuItem>
					<MenuItem value={'barcode'}>Barcode</MenuItem>
					<MenuItem value={'sku'}>SKU</MenuItem>
					<MenuItem value={'category'}>Category</MenuItem>
					<MenuItem value={'brand'}>Brand</MenuItem>
					<MenuItem value={'tags'}>Tags</MenuItem>
				</Select>
			</FormControl>
		</div>
	);
};

const mapStateToProps = state => ({
	product: state.product
});

export default connect(mapStateToProps, { getProducts })(TableSearch);
