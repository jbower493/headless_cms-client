import { API } from 'utilities/api/auth';
import { getSuccessData, getErrorData } from 'utilities/commonActions';
import { setNotification } from 'components/Notification/actions';

export const AUTH_ADMIN_EXISTS_REQUEST = 'auth/AUTH_ADMIN_EXISTS_REQUEST';
export const AUTH_ADMIN_EXISTS_SUCCESS = 'auth/AUTH_ADMIN_EXISTS_SUCCESS';
export const AUTH_ADMIN_EXISTS_ERROR = 'auth/AUTH_ADMIN_EXISTS_ERROR';

export const AUTH_ADMIN_SETUP_REQUEST = 'auth/AUTH_ADMIN_SETUP_REQUEST';
export const AUTH_ADMIN_SETUP_SUCCESS = 'auth/AUTH_ADMIN_SETUP_SUCCESS';
export const AUTH_ADMIN_SETUP_ERROR = 'auth/AUTH_ADMIN_SETUP_ERROR';

export const AUTH_USER_REQUEST = 'auth/AUTH_USER_REQUEST';
export const AUTH_USER_SUCCESS = 'auth/AUTH_USER_SUCCESS';
export const AUTH_USER_ERROR = 'auth/AUTH_USER_ERROR';

export const AUTH_LOGIN_REQUEST = 'auth/AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'auth/AUTH_LOGIN_ERROR';


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
        });
      })
      .catch(error => {
        dispatch({
          type: AUTH_ADMIN_EXISTS_ERROR,
          auth_admin_exists_error: getErrorData(error)
        });
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
        dispatch(setNotification('success', 'Admin User successfully created'));
        dispatch({
          type: AUTH_ADMIN_SETUP_SUCCESS,
          auth_admin_setup_data: getSuccessData(response)
        });
      })
      .catch(error => {
        const auth_admin_setup_error = getErrorData(error);
        dispatch(setNotification('error', auth_admin_setup_error));
        dispatch({
          type: AUTH_ADMIN_SETUP_ERROR,
          auth_admin_setup_error
        });
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
          auth_user_error: getErrorData(error)
        })
      })
  };
};

export const attemptLogin = (credentials) => {
  return dispatch => {
    dispatch({
      type: AUTH_LOGIN_REQUEST
    });
    API.auth.POST.login(credentials)
      .then(response => {
        const auth_login_data = getSuccessData(response);
        const { error, success } = auth_login_data;

        if (success) {
          dispatch(setNotification('success', 'Successfully logged in'));
          dispatch({
            type: AUTH_LOGIN_SUCCESS,
            auth_login_data
          });
        } else {
          dispatch(setNotification('error', error));
          dispatch({
            type: AUTH_LOGIN_ERROR,
            auth_login_error: error
          });
        }

      })
      .catch(error => {
        const auth_login_error = getErrorData(error);
        dispatch(setNotification('error', auth_login_error));
        dispatch({
          type: AUTH_LOGIN_ERROR,
          auth_login_error
        });
      })
  };
};