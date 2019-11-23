import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { DropzoneDialog } from 'material-ui-dropzone';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Save, Delete } from '@material-ui/icons';

import Description from './ProductAdd/Description';

import { getProducts, addProduct } from '../../../actions/productActions';

import {
	getCategory,
	getBrand,
	getTags
} from '../../../actions/optionsActions';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
		// backgroundColor: "#fff"
	},
	formControl: {
		minWidth: '100%'
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	chip: {
		margin: 2
	}
}));

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

const AddProduct = ({
	product: { products, loading, error, success },
	options: { categories, brands, tags },
	getProducts,
	getCategory,
	getBrand,
	getTags
}) => {
	const classes = useStyles();
	const value = {
		brand: '',
		components: '',
		name: '',
		sku: '',
		barcode: '',
		price: 0,
		quantity: 1,
		overview: '',
		tag: [],
		category: '',
		description: []
	};

	useEffect(() => {
		getProducts();
		getBrand();
		getCategory();
		getTags();
	}, []);

	const [data, setData] = React.useState(value);
	const [image, setImage] = useState({ open: false, files: [] });
	const {
		brand,
		category,
		barcode,
		name,
		sku,
		tag,
		price,
		overview,
		quantity,
		description
	} = data;
	const { open, files } = image;
	const handleClose = () => {
		setImage({
			open: false
		});
	};

	const handleOpen = () => {
		setImage({
			open: true
		});
	};

	const onSaveImage = files => {
		setImage({
			files,
			open: false
		});
	};

	const onChange = event =>
		setData({ ...data, [event.target.name]: event.target.value });
	return (
		<Box className={classes.root}>
			<Container>
				<h1 style={{ marginTop: '30px' }}>Add Product</h1>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<TextField
							required
							fullWidth
							label='Product Name'
							name='name'
							className={classes.textField}
							value={name}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Barcode'
							name='barcode'
							className={classes.textField}
							value={barcode}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Stock keeping unit label'
							name='ski'
							className={classes.textField}
							value={sku}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Price'
							name='price'
							className={classes.textField}
							value={price}
							onChange={onChange}
							type='number'
						/>
					</Grid>

					<Grid item xs={3}>
						<TextField
							required
							fullWidth
							label='Quantity'
							name='quantity'
							className={classes.textField}
							value={quantity}
							onChange={onChange}
							type='number'
						/>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='category'>Category</InputLabel>
							<Select
								labelId='category'
								value={category}
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
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='brand'>Brand</InputLabel>
							<Select
								labelId='brand'
								value={brand}
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
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl}>
							<InputLabel id='tag'>Tags</InputLabel>
							<Select
								labelId='tag'
								multiple
								value={tag}
								name='tag'
								onChange={onChange}
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
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={6}>
						{' '}
						<TextField
							required
							multiline={true}
							fullWidth
							label='Overview'
							name='overview'
							className={classes.textField}
							value={overview}
							onChange={onChange}
							type='number'
						/>
					</Grid>
				</Grid>

				<Grid container spacing={3}>
					<Grid item xs={6}>
						<FormControl className={classes.formControl}>
							<Button
								variant='contained'
								className={classes.button}
								onClick={handleOpen}
								margin='normal'
							>
								Upload Images
							</Button>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<h3>Description</h3>
						<p className='mb-3'>Add fields for description of the product.</p>
						<Description value={setData} />
					</Grid>
					<DropzoneDialog
						name='img'
						open={open}
						onClose={handleClose}
						onSave={onSaveImage}
						maxFileSize={50000000}
						acceptedFiles={['image/*', 'video/*', 'application/*']}
						filesLimit={5}
						showPreviews={true}
					/>
				</Grid>

				<Grid container style={{ marginTop: '20px' }}>
					<Grid item>
						<Button
							variant='contained'
							style={{
								backgroundColor: '#2ecc71',
								color: '#fff',
								marginRight: '20px'
							}}
							size='large'
							className={classes.button}
							startIcon={<Save />}
							onClick={() => addProduct(data)}
						>
							Save
						</Button>
					</Grid>
					<Grid item>
						<Button
							variant='contained'
							color='secondary'
							size='large'
							className={classes.button}
							startIcon={<Delete />}
							style={{ marginRight: '20px' }}
						>
							Delete
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
const mapStateToProps = state => ({
	product: state.product,
	options: state.options
});
export default connect(mapStateToProps, {
	getProducts,
	getCategory,
	getBrand,
	getTags
})(AddProduct);
