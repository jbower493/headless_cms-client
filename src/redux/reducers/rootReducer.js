import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mainWindowReducer from './mainWindowReducer';
import usersReducer from './usersReducer';
import contentTypesReducer from './contentTypesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mainWindow: mainWindowReducer,
  users: usersReducer,
  contentTypes: contentTypesReducer
});

export default rootReducer;