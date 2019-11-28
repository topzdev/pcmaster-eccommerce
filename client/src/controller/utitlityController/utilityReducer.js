import { SET_REDIRECT } from '../types';

const initialState = {
	redirect: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_REDIRECT:
			return {
				...state,
				redirect: action.payload
			};

		default:
			return state;
	}
};
