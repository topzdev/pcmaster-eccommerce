import {
	GET_CATEGORY,
	ADD_CATEGORY,
	DELETE_CATEGORY,
	GET_SUBCATEGORY,
	ADD_SUBCATEGORY,
	DELETE_SUBCATEGORY,
	GET_VARIETY,
	ADD_VARIETY,
	DELETE_VARIETY,
	GET_TAG,
	ADD_TAG,
	DELETE_TAG,
	GET_BRAND,
	ADD_BRAND,
	DELETE_BRAND,
	OPTION_ERROR,
	SET_LOADING,
	SET_ERROR
} from '../types';

const initialState = {
	categories: null,
	subcategory: null,
	brands: null,
	tags: null,
	varieties: null,
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
		case SET_ERROR:
			return {
				...state,
				error: action.payload
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
				error: null,
				loading: false,
				success: action.payload,
				categories: [...state.categories, action.payload.data]
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
				error: null,
				loading: false,
				success: action.payload.msg,
				categories: state.categories.filter(
					category => category._id != action.payload.data
				)
			};

		case ADD_SUBCATEGORY:
			return {
				...state,
				error: null,
				loading: false,
				success: action.payload,
				subcategory: [...state.subcategory, action.payload.data]
			};

		case GET_SUBCATEGORY:
			return {
				...state,
				loading: false,
				subcategory: action.payload
			};

		case DELETE_SUBCATEGORY:
			return {
				...state,
				error: null,
				loading: false,
				success: action.payload.msg,
				subcategory: state.subcategory.filter(
					sub => sub._id != action.payload.data
				)
			};
		case ADD_VARIETY:
			return {
				...state,
				error: null,
				loading: false,
				success: action.payload,
				varieties: [...state.varieties, action.payload.data]
			};

		case GET_VARIETY:
			return {
				...state,
				loading: false,
				varieties: action.payload
			};

		case DELETE_VARIETY:
			return {
				...state,
				error: null,
				loading: false,
				success: action.payload.msg,
				varieties: state.varieties.filter(
					vary => vary._id != action.payload.data
				)
			};

		case ADD_TAG:
			return {
				...state,
				loading: false,
				success: action.payload,
				tags: [...state.tags, action.payload.data]
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
				success: action.payload.msg,
				tags: state.tags.filter(tag => tag._id != action.payload.data)
			};

		case ADD_BRAND:
			return {
				...state,
				loading: false,
				success: action.payload,
				brands: [...state.brands, action.payload.data]
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
				success: action.payload.msg,
				brands: state.brands.filter(brand => brand._id != action.payload.data)
			};

		default:
			return state;
	}
};
