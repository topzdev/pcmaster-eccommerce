import axios from 'axios';
import {
	GET_CATEGORY,
	ADD_CATEGORY,
	DELETE_CATEGORY,
	GET_TAG,
	ADD_TAG,
	DELETE_TAG,
	GET_BRAND,
	ADD_BRAND,
	DELETE_BRAND,
	OPTION_ERROR,
	SET_LOADING
} from './types';

const config = {
	headers: {
		'Content-type': 'application/json'
	}
};

//############################### CATEGORY ###############################
//Get the list of Category
export const getCategory = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/api/options/category');

		dispatch({
			type: GET_CATEGORY,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//Add Category
export const addCategory = category => async dispatch => {
	try {
		setLoading();
		const res = await axios.post('/api/options/category', category);
		dispatch({
			type: ADD_CATEGORY,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//Delete Category
export const deleteCategory = id => async dispatch => {
	try {
		setLoading();
		const res = await axios.delete(`/api/options/category/${id}`);
		dispatch({
			type: DELETE_CATEGORY,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//############################### TAGS ###############################

//Get the list of Tags
export const getTags = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/api/options/tags');

		dispatch({
			type: GET_TAG,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//Add Category
export const addTags = tag => async dispatch => {
	try {
		setLoading();
		const res = await axios.post('/api/options/tags', tag);
		dispatch({
			type: ADD_TAG,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//Delete Tags
export const deleteTags = id => async dispatch => {
	try {
		setLoading();
		const res = await axios.delete(`/api/options/tags/${id}`);
		dispatch({
			type: DELETE_TAG,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//############################### BRAND ###############################

//Get the list of Brand
export const getBrand = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/api/options/brand');

		dispatch({
			type: GET_BRAND,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//Add Brand
export const addBrand = brand => async dispatch => {
	try {
		setLoading();
		const res = await axios.post('/api/options/brand', brand);
		dispatch({
			type: ADD_BRAND,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

//Delete Brand
export const deleteBrand = id => async dispatch => {
	try {
		setLoading();
		const res = await axios.delete(`/api/options/brand/${id}`);
		dispatch({
			type: DELETE_BRAND,
			payload: res.data
		});
	} catch (err) {
		console.error(err.response.data);
		dispatch({
			type: OPTION_ERROR,
			payload: err.response.data
		});
	}
};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};