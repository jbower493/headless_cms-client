import { SHOW_DASHBOARD, SHOW_CONTENT_TYPES, SHOW_USERS, SHOW_CONTENT } from '../actions/types';

const initialState = {
  view: 'dashboard'
};

const mainWindowReducer = (state = initialState, action) => {
  switch(action.type) {
    case SHOW_DASHBOARD:
      return {
        ...state,
        view: 'dashboard'
      };
    case SHOW_CONTENT_TYPES:
      return {
        ...state,
        view: 'content types'
      };
    case SHOW_USERS:
      return {
        ...state,
        view: 'users'
      };
    case SHOW_CONTENT:
      return {
        ...state,
        view: 'content'
      };
    default:
      return state;
  };
};

export default mainWindowReducer;