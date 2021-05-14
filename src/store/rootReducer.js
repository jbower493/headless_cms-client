import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mainWindowReducer from './mainWindowReducer';
import usersReducer from './usersReducer';
import contentTypesReducer from './contentTypesReducer';
import contentReducer from './contentReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mainWindow: mainWindowReducer,
  users: usersReducer,
  contentTypes: contentTypesReducer,
  content: contentReducer,
  modal: modalReducer
});

export default rootReducer;