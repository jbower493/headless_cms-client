import { API } from 'utilities/api/auth';

export const AUTH_ADMIN_EXISTS_REQUEST = 'auth/AUTH_ADMIN_EXISTS_REQUEST';
export const AUTH_ADMIN_EXISTS_SUCCESS = 'auth/AUTH_ADMIN_EXISTS_SUCCESS';
export const AUTH_ADMIN_EXISTS_ERROR = 'auth/AUTH_ADMIN_EXISTS_ERROR';

export const AUTH_USER_REQUEST = 'auth/AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'auth/AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'auth/AUTH_USER_ERROR';


export const checkForAdmin = () => {
  return dispatch => {
    dispatch({
      type: AUTH_ADMIN_EXISTS_REQUEST
    });
    API.auth.GET.adminExists()
      .then(res => {
        dispatch({
          type: AUTH_ADMIN_EXISTS_SUCCESS,
          auth_admin_exists_data: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: AUTH_ADMIN_EXISTS_ERROR,
          auth_admin_exists_error: error
        })
      })
  };
};

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: AUTH_USER_REQUEST
    });
    API.auth.GET.getUser()
      .then(res => {
        dispatch({
          type: AUTH_USER_SUCCESS,
          auth_user_data: res.data
        })
      })
      .catch(error => {
        dispatch({
          type: AUTH_USER_ERROR,
          auth_user_error: error
        })
      })
  };
};