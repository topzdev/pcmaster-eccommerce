import {
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SEARCH_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCT_ERROR,
	SET_LOADING,
	CLEAR_ERROR,
	CLEAR_SUCCESS
} from '../actions/types';

const initialState = {
	products: null,
	current: null,
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

		case GET_PRODUCTS:
			return {
				...state,
				loading: false,
				products: action.payload
			};

		case ADD_PRODUCT:
			return {
				...state,
				loading: false,
				success: action.payload
			};

		case PRODUCT_ERROR:
			return {
				...state,
				error: action.payload
			};

		case CLEAR_ERROR:
			return {
				...state,
				error: null
			};

		case CLEAR_SUCCESS:
			return {
				...state,
				success: null
			};

		default:
			return state;
	}
};
