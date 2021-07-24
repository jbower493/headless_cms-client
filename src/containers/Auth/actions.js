import { API } from 'utilities/api/auth';
import { getSuccessData, getErrorData, getErrorStatus } from 'utilities/commonActions';

export const AUTH_ADMIN_EXISTS_REQUEST = 'auth/AUTH_ADMIN_EXISTS_REQUEST';
export const AUTH_ADMIN_EXISTS_SUCCESS = 'auth/AUTH_ADMIN_EXISTS_SUCCESS';
export const AUTH_ADMIN_EXISTS_ERROR = 'auth/AUTH_ADMIN_EXISTS_ERROR';

export const AUTH_ADMIN_SETUP_REQUEST = 'auth/AUTH_ADMIN_SETUP_REQUEST';
export const AUTH_ADMIN_SETUP_SUCCESS = 'auth/AUTH_ADMIN_SETUP_SUCCESS';
export const AUTH_ADMIN_SETUP_ERROR = 'auth/AUTH_ADMIN_SETUP_ERROR';

export const AUTH_USER_REQUEST = 'auth/AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'auth/AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'auth/AUTH_USER_ERROR';


/********** ADMIN **********/

export const checkForAdmin = () => {
  return dispatch => {
    dispatch({
      type: AUTH_ADMIN_EXISTS_REQUEST
    });
    API.auth.GET.admin()
      .then(response => {
        dispatch({
          type: AUTH_ADMIN_EXISTS_SUCCESS,
          auth_admin_exists_data: getSuccessData(response)
        })
      })
      .catch(error => {
        dispatch({
          type: AUTH_ADMIN_EXISTS_ERROR,
          auth_admin_exists_error: getErrorData(error)
        })
      })
  };
};

export const setupAdmin = (profile) => {
  return dispatch => {
    dispatch({
      type: AUTH_ADMIN_SETUP_REQUEST
    });
    API.auth.POST.admin(profile)
      .then(response => {
        dispatch({
          type: AUTH_ADMIN_SETUP_SUCCESS,
          auth_admin_setup_data: getSuccessData(response)
        })
        console.log(getSuccessData(response))
      })
      .catch(error => {
        dispatch({
          type: AUTH_ADMIN_SETUP_ERROR,
          auth_admin_setup_error: getErrorData(error)
        })
        console.log(getErrorData(error))
      })
  };
};

/********** AUTH **********/

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: AUTH_USER_REQUEST
    });
    API.auth.GET.user()
      .then(response => {
        dispatch({
          type: AUTH_USER_SUCCESS,
          auth_user_data: getSuccessData(response)
        })
      })
      .catch(error => {
        dispatch({
          type: AUTH_USER_ERROR,
          auth_user_error: error//getErrorData(error)
        })
      })
  };
};