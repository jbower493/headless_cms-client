import { combineReducers } from 'redux';

import notificationReducer from 'components/Notification/reducer';

import authReducer from 'containers/auth/reducer';
import contentTypesReducer from 'containers/contentTypes/reducer';

const rootReducer = combineReducers({
  notification: notificationReducer,
  auth: authReducer,
  contentTypes: contentTypesReducer
});

export default rootReducer;