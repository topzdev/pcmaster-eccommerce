import axios from 'axios';

import {
	ADMIN_LOGIN,
	ADMIN_REGISTER,
	ADMIN_DELETE,
	ADMIN_UPDATE,
	ADMIN_VERIFIED,
	REGISTER_SUCCESS,
	REGISTER_FAILED,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	SET_LOADING,
	ADMIN_ERROR,
	ADMIN_ACCOUNTS
} from '../../types';

const config = {
	header: {
		'Content-type': 'Application/json'
	}
};

export const registerAdmin = user => async dispatch => {
	try {
		setLoading();
		const registered = await axios.post('/api/auth/admin/', user, config);

		dispatch({
			type: ADMIN_REGISTER,
			payload: registered
		});
	} catch (err) {
		dispatch({
			type: ADMIN_ERROR,
			payload: err.response.data
		});
	}
};

export const loginAdmin = credentials => async dispatch => {
	try {
		setLoading();
		const logged = await axios.post(
			'/api/auth/admin/auth/',
			credentials,
			config
		);

		dispatch({
			type: LOGIN_SUCCESS,
			payload: logged
		});
	} catch (err) {
		dispatch({
			type: LOGIN_FAILED,
			payload: err.response.data.msg
		});
	}
};

export const getAccounts = () => async dispatch => {
	try {
		setLoading();
		const accounts = await axios.post('/api/auth/admin/', config);
		dispatch({
			type: ADMIN_ACCOUNTS,
			payload: accounts
		});
	} catch (err) {
		dispatch({
			type: ADMIN_ERROR,
			payload: err.response.data
		});
	}
};

export const deleteAdmin = id => async dispatch => {
	try {
		setLoading();
		const deleted = await axios.delete(`/api/auth/admin/${id}`);

		dispatch({
			type: ADMIN_DELETE,
			payload: deleted
		});
	} catch (err) {
		dispatch({
			type: ADMIN_ERROR,
			payload: err.response.data
		});
	}
};

export const updateAdmin = data => async dispatch => {
	try {
		setLoading();
		const updated = await axios.put('/api/auth/admin/', data, config);

		dispatch({
			type: ADMIN_UPDATE,
			payload: updated
		});
	} catch (err) {
		dispatch({
			type: ADMIN_ERROR,
			payload: err.response.data
		});
	}
};

const setLoading = () => async dispatch => {
	dispatch({
		type: SET_LOADING
	});
};
