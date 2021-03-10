import { CHECK_FOR_ADMIN, GET_USER, LOGIN, LOGOUT, REQUESTING_AUTH_DATA, RECEIVED_AUTH_DATA } from '../actions/types';

const initialState = {
  user: null,
  adminExists: false,
  fetchingAuthData: false
};

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUESTING_AUTH_DATA: 
      return {
        ...state,
        fetchingAuthData: true
      };
    case RECEIVED_AUTH_DATA:
      return {
        ...state,
        fetchingAuthData: false
      };
    case CHECK_FOR_ADMIN:
      return {
        ...state,
        adminExists: action.payload
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload
      };
    case LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;