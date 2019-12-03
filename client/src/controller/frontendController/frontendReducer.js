import {
	addStorage,
	removeStorage,
	updateStorage,
	getStorage
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
	cart: getStorage('pcmaster-cart'),
	wishlist: getStorage('pcmaster-wishlist'),
	success: null,
	error: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_CART:
			addStorage(action.payload.data, 'pcmaster-cart');
			return {
				...state,
				error: null,
				cart: [...state.cart, action.payload.data],
				success: action.payload.msg
			};

		case REMOVE_CART:
			removeStorage(action.payload.data, 'pcmaster-cart');
			return {
				...state,
				error: null,
				cart: state.cart.filter(item => item._id != action.payload.data),
				success: action.payload.msg
			};

		case UPDATE_CART:
			let data = action.payload.data;
			updateStorage(data.value, 'pcmaster-cart');
			return {
				...state,
				error: null,
				cart: state.cart.map(item =>
					item._id === data.id ? data.value : item
				),
				succcess: action.payload.msg
			};

		case ADD_WISHLIST:
			addStorage(action.payload.data, 'pcmaster-wishlist');
			return {
				...state,
				error: null,
				wishlist: [...state.wishlist, action.payload.data],
				success: action.payload.msg
			};

		case REMOVE_WISHLIST:
			removeStorage(action.payload.data, 'pcmaster-wishlist');
			return {
				...state,
				error: null,
				wishlist: state.wishlist.filter(
					item => item._id != action.payload.data
				),
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
