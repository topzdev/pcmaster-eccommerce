import {
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SEARCH_PRODUCT,
	SET_LOADING,
	PRODUCT_ERROR,
	CLEAR_ERROR,
	CLEAR_SUCCESS
} from '../types';

const initialState = {
	products: null,
	current: null,
	error: null,
	success: null,
	redirect: null,
	loading: false
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
				products: action.payload,
				loading: false
			};

		case ADD_PRODUCT:
			return {
				...state,
				error: null,
				success: action.payload,
				products: [...state.products, action.payload.data],
				loading: false
			};

		case DELETE_PRODUCT:
			return {
				...state,
				error: null,
				current: null,
				success: action.payload.data,
				products: state.products.filter(item => item._id != action.payload.id)
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

		case SEARCH_PRODUCT:
			return {
				...state,
				current: action.payload
			};

		default:
			return state;
	}
};
