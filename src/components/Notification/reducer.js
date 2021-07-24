import {
  NOTIFICATION_SET,
  NOTIFICATION_DISMISS
} from './actions';

const initialState = {
  notification_data: null
};

export default (state = initialState, action) => {
  switch (action.type) {

    case NOTIFICATION_SET:
      return {
        ...state,
        notification_data: action.notification_data
      }

    case NOTIFICATION_DISMISS:
      return {
        ...state,
        notification_data: null
      }

    default: return state;

  }
};