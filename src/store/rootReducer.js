import { combineReducers } from 'redux';
import authReducer from 'containers/auth/reducer';
import notificationReducer from 'components/Notification/reducer';

const rootReducer = combineReducers({
  notification: notificationReducer,
  auth: authReducer
});

export default rootReducer;