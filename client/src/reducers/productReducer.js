import {
	GET_PRODUCTS,
	ADD_PRODUCT,
	DELETE_PRODUCT,
	SEARCH_PRODUCT,
	UPDATE_PRODUCT,
	PRODUCT_ERROR,
	SET_LOADING
} from '../actions/types';

const initialState = {
	product: null,
	current: null,
	loading: false,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_PRODUCTS:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
