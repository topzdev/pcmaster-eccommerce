import React, { Fragment, useState, useEffect } from './node_modules/react';
import { connect } from './node_modules/react-redux';
import { DropzoneDialog } from './node_modules/material-ui-dropzone';
import { makeStyles } from './node_modules/@material-ui/core/styles';
import Grid from './node_modules/@material-ui/core/Grid';
import FormControl from './node_modules/@material-ui/core/FormControl';
import Button from './node_modules/@material-ui/core/Button';
import TextField from './node_modules/@material-ui/core/TextField';
import { Save, Delete } from './node_modules/@material-ui/icons';

import Scroll from './node_modules/react-scroll';
import _ from './node_modules/lodash';

import Description from './productComponents/Description';
import PreLoader from '../util/PreLoader';
import DeleteModal from '../layout/modal/DeleteModal';

import CategoryDropdown from './dropdowns/CategoryDropdown';
import SubCategoryDropdown from './dropdowns/SubCategoryDropdown';
import BrandDropdown from './dropdowns/BrandDropdown';
import TagDropdown from './dropdowns/TagDropdown';
import VarietyDropdown from './dropdowns/VarietyDropdown';
import {
	getProducts,
	addProduct,
	deleteProduct,
	clearError,
	clearSuccess
} from '../../../controller/productController/productActions';

import { setRedirect } from '../../../controller/utitlityController/utilityActions';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	formControl: {
		minWidth: '100%'
	}
}));

const ProductForm = ({
	product: { error, success, current },
	options: { varieties },
	getProducts,
	addProduct,
	clearError,
	clearSuccess,
	deleteProduct,
	setRedirect
}) => {
	const classes = useStyles();
	const initialState = {
		brand: '',
		components: '',
		name: '',
		sku: '',
		barcode: '',
		price: 1,
		quantity: 1,
		subcategory: '',
		variety: '',
		overview: '',
		tags: [],
		category: '',
		description: [{ title: '', content: '' }]
	};

	const [data, setData] = React.useState(initialState);
	const [image, setImage] = useState([]);
	const [open, setOpen] = useState(false);
	const [validate, setValidate] = useState({});
	const [loading, setLoading] = useState(false);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		getProducts();
		if (window.location.pathname.includes('edit'))
			setData(current ? current : initialState);
	}, []);

	useEffect(() => {
		if (error != null) {
			errorFields();
			setLoading(false);
		}
	}, [error]);

	useEffect(() => {
		clearError();
		if (success) {
			clearSuccess();
			setData(initialState);
			setImage([]);
			setLoading(false);
			setValidate({});
			setRedirect({ open: true, url: '/admin/product/' });
		}
	}, [success]);

	const errorFields = () => {
		const parseError = {};

		if (Array.isArray(error.msg)) {
			error.msg.map(err => (parseError[err.param] = true));
		} else {
			parseError[error.param] = true;
		}

		setValidate(parseError);
	};

	const onSaveImage = files => {
		setOpen(false);
		setImage(files);
	};

	const getDescription = value => {
		setData({ ...data, ['description']: value });
	};

	const onAddProduct = () => {
		setLoading(true);
		addProduct(data, image);
		Scroll.animateScroll.scrollToTop();
	};

	const onChange = event =>
		setData({ ...data, [event.target.name]: event.target.value });

	return (
		<Fragment>
			{loading && <PreLoader />}
			<Grid container style={{ paddingTop: '0', position: 'relative' }}>
				<Grid container style={{ marginBottom: '30px' }}>
					<h1>{current ? 'Edit' : 'Add'} Product</h1>
				</Grid>
				<Grid container spacing={3} style={{ marginBottom: '30px' }}>
					<Grid item xs={6}>
						<TextField
							autoComplete='off'
							error={validate.name}
							required
							fullWidth
							label='Product Name'
							name='name'
							className={classes.textField}
							value={data.name}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							autoComplete='off'
							error={validate.barcode}
							required
							fullWidth
							label='Barcode'
							name='barcode'
							className={classes.textField}
							value={data.barcode}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							autoComplete='off'
							error={validate.sku}
							required
							fullWidth
							label='Stock keeping unit label'
							name='sku'
							className={classes.textField}
							value={data.sku}
							onChange={onChange}
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							autoComplete='off'
							error={validate.price}
							required
							fullWidth
							label='Price'
							name='price'
							className={classes.textField}
							value={data.price}
							onChange={onChange}
							type='number'
						/>
					</Grid>
					<Grid item xs={3}>
						<TextField
							autoComplete='off'
							error={validate.price}
							required
							fullWidth
							label='Quantity'
							name='quantity'
							className={classes.textField}
							value={data.quantity}
							onChange={onChange}
							type='number'
						/>
					</Grid>

					<Grid item xs={6}>
						{' '}
						<TextField
							autoComplete='off'
							error={validate.overview}
							required
							multiline={true}
							fullWidth
							label='Overview'
							name='overview'
							className={classes.textField}
							value={data.overview}
							onChange={onChange}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={3} style={{ marginBottom: '30px' }}>
					<Grid item xs={3}>
						<FormControl
							className={classes.formControl}
							error={validate.category}
						>
							<CategoryDropdown value={data.category} onChange={onChange} />
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl
							className={classes.formControl}
							error={validate.subcategory}
							disabled={_.isEmpty(data.category) ? true : false}
						>
							<SubCategoryDropdown
								value={data.subcategory}
								onChange={onChange}
							/>
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl
							className={classes.formControl}
							error={validate.variety}
							disabled={
								_.isEmpty(data.subcategory) || _.isEmpty(varieties)
									? true
									: false
							}
						>
							<VarietyDropdown value={data.variety} onChange={onChange} />
						</FormControl>
					</Grid>

					<Grid item xs={3}>
						<FormControl className={classes.formControl} error={validate.brand}>
							<BrandDropdown value={data.brand} onChange={onChange} />
						</FormControl>
					</Grid>
					<Grid item xs={3}>
						<FormControl className={classes.formControl} error={validate.tags}>
							<TagDropdown value={data.tags} onChange={onChange} />
						</FormControl>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={6}>
						<FormControl className={classes.formControl}>
							<Button
								variant='contained'
								className={classes.button}
								onClick={() => setOpen(true)}
								margin='normal'
							>
								Upload Images
							</Button>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<h3>Description</h3>
						<p className='mb-3'>Add fields for description of the product.</p>
						<Description
							setDescription={getDescription}
							description={data.description}
						/>
					</Grid>
					<DropzoneDialog
						name='img'
						open={open}
						onClose={() => setOpen(false)}
						onSave={onSaveImage}
						maxFileSize={20000000}
						acceptedFiles={['image/*', 'video/*', 'application/*']}
						filesLimit={5}
						showPreviews={true}
					/>
				</Grid>
				<Grid container style={{ marginTop: '30px' }}>
					{!current ? (
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
								onClick={onAddProduct}
							>
								Save
							</Button>
						</Grid>
					) : (
						<Fragment>
							<Grid item>
								<Button
									variant='contained'
									color='secondary'
									size='large'
									className={classes.button}
									startIcon={<Delete />}
									style={{
										backgroundColor: '#e67e22',
										color: '#000',
										marginRight: '20px'
									}}
								>
									Update
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
									onClick={() => setModal(true)}
								>
									Delete
								</Button>
							</Grid>
							<DeleteModal
								open={modal}
								setOpen={setModal}
								execDelete={deleteProduct}
								id={data._id}
							/>
						</Fragment>
					)}
				</Grid>
			</Grid>
		</Fragment>
	);
};
const mapStateToProps = state => ({
	product: state.product,
	options: state.options,
	utility: state.utility
});
export default connect(mapStateToProps, {
	getProducts,
	addProduct,
	clearError,
	clearSuccess,
	deleteProduct,
	setRedirect
})(ProductForm);
