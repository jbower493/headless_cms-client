import {
  AUTH_ADMIN_EXISTS_REQUEST,
  AUTH_ADMIN_EXISTS_SUCCESS,
  AUTH_ADMIN_EXISTS_ERROR
} from './actions';

const initialState = {
  auth_admin_exists_status: null,
  auth_admin_exists_data: null,
  auth_admin_exists_error: null
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

  }
}

export default authReducer;