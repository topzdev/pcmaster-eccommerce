import {
	ADMIN_LOGIN,
	ADMIN_REGISTER,
	ADMIN_DELETE,
	ADMIN_UPDATE,
	ADMIN_VERIFIED,
	AUTH_ERROR,
	SET_LOADING,
	REGISTER_FAILED,
	REGISTER_SUCCESS,
	ADMIN_ACCOUNTS,
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	ADMIN_ERROR
} from '../../types';

const initialState = {
	token: localStorage.getItem('pcmaster.com.admin.token'),
	isAuthenticated: null,
	logged: null,
	accounts: null,
	error: null,
	success: null,
	loading: false
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			localStorage.setItem('pcmaster.com.admin.token', action.payload.token);
			return {
				...state,
				error: null,
				isAuthenticated: true,
				loading: false
			};

		case ADMIN_VERIFIED:
			return {
				...state,
				error: null,
				isAuthenticated: true,
				logged: action.payload,
				loading: false
			};

		case LOGIN_FAILED:
		case AUTH_ERROR:
			localStorage.removeItem('pcmaster.com.admin.token');
			return {
				...state,
				token: null,
				isAuthenticated: false,
				loading: false,
				logged: null,
				error: action.payload
			};

		case ADMIN_ACCOUNTS:
			return {
				...state,
				error: null,
				accounts: action.payload
			};
		case ADMIN_REGISTER:
			return {
				...state,
				error: null,
				accounts: [...state.accounts, action.payload.data],
				success: action.payload,
				loading: false
			};
		case ADMIN_DELETE:
			return {
				...state,
				error: null,
				accounts: state.accounts.map(item => item.id != action.payload.data.id),
				success: action.payload,
				loading: false
			};
		case ADMIN_UPDATE:
			return {
				...state,
				error: null,
				success: action.payload,
				loading: false
			};
		case ADMIN_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};

		default:
			return state;
	}
};
