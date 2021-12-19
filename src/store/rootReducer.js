import { combineReducers } from 'redux';

import notificationReducer from 'components/Notification/reducer';

import authReducer from 'containers/auth/reducer';
import contentTypesReducer from 'containers/contentTypes/reducer';
import contentReducer from 'containers/content/reducer';
import usersReducer from 'containers/users/reducer';

const rootReducer = combineReducers({
  notification: notificationReducer,
  auth: authReducer,
  contentTypes: contentTypesReducer,
  content: contentReducer,
  users: usersReducer
});

export default rootReducer;