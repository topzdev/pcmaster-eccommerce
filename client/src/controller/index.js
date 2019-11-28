import { combineReducers } from 'redux';
import productReducer from './productController/productReducer';
import optionsReducer from './optionController/optionsReducer';
import utilityReducer from './utitlityController/utilityReducer';

export default combineReducers({
	product: productReducer,
	options: optionsReducer,
	utility: utilityReducer
});
