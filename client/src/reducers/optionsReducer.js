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
} from '../actions/types';

const initialState = {
	categories: null,
	brands: null,
	tags: null,
	loading: false,
	error: null,
	success: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		case OPTION_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload
			};
		case ADD_CATEGORY:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		case GET_CATEGORY:
			return {
				...state,
				loading: false,
				categories: action.payload
			};

		case DELETE_CATEGORY:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		case ADD_TAG:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		case GET_TAG:
			return {
				...state,
				loading: false,
				tags: action.payload
			};

		case DELETE_TAG:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		case ADD_BRAND:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		case GET_BRAND:
			return {
				...state,
				loading: false,
				brands: action.payload
			};

		case DELETE_BRAND:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		default:
			return state;
	}
};
