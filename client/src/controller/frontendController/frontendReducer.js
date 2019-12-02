import {
	addCart,
	removeCart,
	updateCart,
	getCart
} from '../../utils/tempStorage';

import {
	ADD_CART,
	REMOVE_CART,
	UPDATE_CART,
	ADD_WISHLIST,
	REMOVE_WISHLIST,
	SET_ERROR
} from '../types';

const initialState = {
	cart: getCart(),
	wishlist: null,
	success: null,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			addCart(action.payload.data);
			return {
				...state,
				error: null,
				cart: [...state.cart, action.payload.data],
				success: action.payload.msg
			};

		case REMOVE_CART:
			removeCart(action.payload.data);
			return {
				...state,
				error: null,
				cart: state.cart.filter(item => item.id != action.payload.data),
				success: action.payload.msg
			};

		case UPDATE_CART:
			let data = action.payload.data;
			console.log(data);
			updateCart(data.value);
			return {
				...state,
				error: null,
				cart: state.cart.map(item => (item.id === data.id ? data.value : item)),
				succcess: action.payload.msg
			};

		case ADD_WISHLIST:
			return {
				...state,
				error: null,
				wishlist: [...state.wishlist, action.payload.data],
				success: action.payload.msg
			};

		case REMOVE_WISHLIST:
			return {
				...state,
				error: null,
				wishlist: state.wishlist.filter(item => item.id != action.payload.data),
				success: action.payload.msg
			};

		case SET_ERROR:
			return {
				...state,
				success: null,
				error: action.payload
			};
		default:
			return state;
	}
};
