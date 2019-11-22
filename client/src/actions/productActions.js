import axios from 'axios';

import {
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SEARCH_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCT_ERROR,
	SET_LOADING
} from './types';

const config = {
	headers: {
		'Content-type': 'application/json'
	}
};

export const getProducts = () => async dispatch => {
	try {
		setLoading();
		const res = await axios.get('/api/product/', config);
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
export const addProduct = data => async dispatch => {
	try {
		setLoading();
		const res = await axios.post('/api/product/', data, config);
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
// export const deleteProduct = id => async dispatch => {
// 	try {
// 		setLoading();
// 		const res = await axios.delete(`/api/product/${id}`);
// 		dispatch({
// 			type: DELETE_PRODUCT,
// 			payload: res.data
// 		});
// 	} catch (err) {
// 		console.log(err.response.data);
// 		dispatch({
// 			type: PRODUCT_ERROR,
// 			payload: err.response.data
// 		});
// 	}
// };
// export const updateProduct = data => async dispatch => {
// 	try {
// 		setLoading();
// 		const res = await axios.put(`/api/product/${id}`, data);
// 		dispatch({
// 			type: UPDATE_PRODUCT,
// 			payload: res.data
// 		});
// 	} catch (err) {
// 		console.log(err.response.data);
// 		dispatch({
// 			type: PRODUCT_ERROR,
// 			payload: err.response.data
// 		});
// 	}
// };
export const searchProduct = () => async dispatch => {};

export const setLoading = () => {
	return {
		type: SET_LOADING
	};
};
