import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';

// these keys represent our states
export default combineReducers({
    auth: authReducer,
    form: reduxForm, 
    surveys: surveysReducer
});