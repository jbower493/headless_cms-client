import {
  AUTH_ADMIN_EXISTS_REQUEST,
  AUTH_ADMIN_EXISTS_SUCCESS,
  AUTH_ADMIN_EXISTS_ERROR,
  AUTH_ADMIN_SETUP_REQUEST,
  AUTH_ADMIN_SETUP_SUCCESS,
  AUTH_ADMIN_SETUP_ERROR,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR
} from './actions';

const initialState = {
  auth_admin_exists_status: null,
  auth_admin_exists_data: null,
  auth_admin_exists_error: null,
  auth_admin_setup_status: null,
  auth_admin_setup_data: null,
  auth_admin_setup_error: null,
  auth_user_status: null,
  auth_user_data: null,
  auth_user_error: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case AUTH_ADMIN_EXISTS_REQUEST:
      return {
        ...state,
        auth_admin_exists_status: 'loading',
        auth_admin_exists_data: null,
        auth_admin_exists_error: null
      }

    case AUTH_ADMIN_EXISTS_SUCCESS:
      return {
        ...state,
        auth_admin_exists_status: 'success',
        auth_admin_exists_data: action.auth_admin_exists_data
      }

    case AUTH_ADMIN_EXISTS_ERROR:
      return {
        ...state,
        auth_admin_exists_status: 'error',
        auth_admin_exists_error: action.auth_admin_exists_error
      }

    case AUTH_ADMIN_SETUP_REQUEST:
      return {
        ...state,
        auth_admin_setup_status: 'loading',
        auth_admin_setup_data: null,
        auth_admin_setup_error: null
      }

    case AUTH_ADMIN_SETUP_SUCCESS:
      return {
        ...state,
        auth_admin_setup_status: 'success',
        auth_admin_setup_data: action.auth_admin_setup_data
      }

    case AUTH_ADMIN_SETUP_ERROR:
      return {
        ...state,
        auth_admin_setup_status: 'error',
        auth_admin_setup_error: action.auth_admin_setup_error
      }

    case AUTH_USER_REQUEST:
      return {
        ...state,
        auth_user_status: 'loading',
        auth_user_data: null,
        auth_user_error: null
      }

    case AUTH_USER_SUCCESS:
      return {
        ...state,
        auth_user_status: 'success',
        auth_user_data: action.auth_user_data,
      }

    case AUTH_USER_ERROR:
      return {
        ...state,
        auth_user_status: 'error',
        auth_user_error: action.auth_user_error
      }

    default:
      return {
        ...state
      }

  }
}

export default authReducer;