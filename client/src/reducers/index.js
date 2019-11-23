import { combineReducers } from 'redux';
import productReducer from './productReducer';
import optionsReducer from './optionsReducer';
export default combineReducers({
	product: productReducer,
	options: optionsReducer
});
