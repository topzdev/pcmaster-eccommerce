import axios from 'axios';

import {
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SEARCH_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCT_ERROR,
	UPLOAD_IMAGE,
	PRODUCT_LOADING,
	SET_LOADING,
	CLEAR_ERROR,
	CLEAR_SUCCESS
} from './types';

const config = {
	headers: {
		'Content-type': 'application/json'
	}
};

const setLoading = () => dispatch => {
	dispatch({
		type: PRODUCT_LOADING
	});
};

export const getProducts = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/api/product/', config);
		console.log(res.data);
		dispatch({
			type: GET_PRODUCTS,
			payload: res.data
		});
	} catch (err) {
		console.log(err.response.data);
		dispatch({
			type: PRODUCT_ERROR,
			payload: err.response.data
		});
	}
};
export const addProduct = (data, images) => async dispatch => {
	setLoading();
	try {
		//Product Fields uploading to database first
		const res = await axios.post('/api/product/', data, config);

		const files = Array.from(images);
		const formData = new FormData();

		files.forEach((file, i) => {
			formData.append(i, file);
		});
		//Uploading the images to Cloudinary and return the url and info of images
		const resImage = await axios.post(
			'/api/product/image-upload',
			formData,
			config
		);

		//Updating the img of uploaded data
		await axios.put(
			'/api/product/update-img',
			{
				_id: res.data.data._id,
				img: resImage.data.data
			},
			config
		);

		dispatch({
			type: ADD_PRODUCT,
			payload: res.data
		});
	} catch (err) {
		console.log(err.response.data);
		dispatch({
			type: PRODUCT_ERROR,
			payload: err.response.data
		});
	}
};
export const deleteProduct = id => async dispatch => {
	try {
		setLoading();
		const res = await axios.delete(`/api/product/${id}`);
		dispatch({
			type: DELETE_PRODUCT,
			payload: res.data
		});
	} catch (err) {
		console.log(err.response.data);
		dispatch({
			type: PRODUCT_ERROR,
			payload: err.response.data
		});
	}
};
export const updateProduct = data => async dispatch => {
	const { _id } = data;
	try {
		setLoading();
		const res = await axios.put(`/api/product/${_id}`, data);
		dispatch({
			type: UPDATE_PRODUCT,
			payload: res.data
		});
	} catch (err) {
		console.log(err.response.data);
		dispatch({
			type: PRODUCT_ERROR,
			payload: err.response.data
		});
	}
};
export const searchProduct = () => async dispatch => {};

export const clearError = () => dispatch => {
	dispatch({
		type: CLEAR_ERROR
	});
};

export const clearSuccess = () => dispatch => {
	dispatch({
		type: CLEAR_SUCCESS
	});
};
