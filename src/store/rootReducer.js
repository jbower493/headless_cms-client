import { combineReducers } from 'redux';
import authReducer from 'containers/auth/reducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;