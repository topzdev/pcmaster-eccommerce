import { combineReducers } from 'redux';
import productReducer from './productController/productReducer';
import optionsReducer from './optionController/optionsReducer';
import utilityReducer from './utitlityController/utilityReducer';

import adminAuthReducer from './authController/admin/authReducer';

export default combineReducers({
	product: productReducer,
	options: optionsReducer,
	utility: utilityReducer,
	adminAuth: adminAuthReducer
});
