import { combineReducers } from 'redux';
import authReducer from './authReducer';

// these keys represent our states
export default combineReducers({
    auth: authReducer
});