import axios from 'axios';
import {
	ADD_CATEGORY,
	DELETE_CATEGORY,
	ADD_TAG,
	DELETE_TAG,
	OPTION_ERROR
} from './types';

const config = {
	headers: {
		'Content-type': 'application/json'
	}
};

export const addCategory = () => async dispatch => {
	try {
		const res = await axios.post('/');
	} catch (err) {}
};
