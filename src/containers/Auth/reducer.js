import {
  AUTH_ADMIN_EXISTS_REQUEST,
  AUTH_ADMIN_EXISTS_SUCCESS,
  AUTH_ADMIN_EXISTS_ERROR,
  AUTH_ADMIN_SETUP_REQUEST,
  AUTH_ADMIN_SETUP_SUCCESS,
  AUTH_ADMIN_SETUP_ERROR,
  AUTH_USER_REQUEST,
  AUTH_USER_SUCCESS,
  AUTH_USER_ERROR,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT_REQUEST,
  AUTH_LOGOUT_SUCCESS,
  AUTH_LOGOUT_ERROR
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
  auth_user_error: null,
  auth_login_status: null,
  auth_login_data: null,
  auth_login_error: null,
  auth_logout_status: null,
  auth_logout_data: null,
  auth_logout_error: null
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

    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        auth_login_status: 'loading',
        auth_login_data: null,
        auth_login_error: null
      }

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        auth_login_status: 'success',
        auth_login_data: action.auth_login_data
      }

    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        auth_login_status: 'error',
        auth_login_error: action.auth_login_error
      }

    case AUTH_LOGOUT_REQUEST:
      return {
        ...state,
        auth_logout_status: 'loading',
        auth_logout_data: null,
        auth_logout_error: null
      }

    case AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
        auth_logout_status: 'success',
        auth_logout_data: action.auth_logout_data
      }

    case AUTH_LOGOUT_ERROR:
      return {
        ...state,
        auth_logout_status: 'error',
        auth_logout_error: action.auth_logout_error
      }

    default:
      return {
        ...state
      }

  }
}

export default authReducer;