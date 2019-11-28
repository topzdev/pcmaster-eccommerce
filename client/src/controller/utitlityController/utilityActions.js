import { SET_REDIRECT } from '../types';

export const setRedirect = action => dispatch => {
	dispatch({
		type: SET_REDIRECT,
		payload: action
	});
};
