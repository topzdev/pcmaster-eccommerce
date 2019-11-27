import { combineReducers } from 'redux';
import productReducer from './productReducer';
import optionsReducer from './optionsReducer';
import utilityReducer from './utilityReducer';

export default combineReducers({
	product: productReducer,
	options: optionsReducer,
	utility: utilityReducer
});
