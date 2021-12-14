import { API } from 'utilities/api/users';
import { getSuccessData, getErrorData } from 'utilities/commonActions';
import { setNotification } from 'components/Notification/actions';

export const USERS_ALL_REQUEST = 'users/USERS_ALL_REQUEST';
export const USERS_ALL_SUCCESS = 'users/USERS_ALL_SUCCESS';
export const USERS_ALL_ERROR = 'users/USERS_ALL_ERROR';

export const USERS_ONE_REQUEST = 'users/USERS_ONE_REQUEST';
export const USERS_ONE_SUCCESS = 'users/USERS_ONE_SUCCESS';
export const USERS_ONE_ERROR = 'users/USERS_ONE_ERROR';

export const USERS_NEW_REQUEST = 'users/USERS_NEW_REQUEST';
export const USERS_NEW_SUCCESS = 'users/USERS_NEW_SUCCESS';
export const USERS_NEW_ERROR = 'users/USERS_NEW_ERROR';

export const USERS_DELETE_REQUEST = 'users/USERS_DELETE_REQUEST';
export const USERS_DELETE_SUCCESS = 'users/USERS_DELETE_SUCCESS';
export const USERS_DELETE_ERROR = 'users/USERS_DELETE_ERROR';


/********** ALL **********/

export const getAllUsers = () => {
  return dispatch => {
    dispatch({ type: USERS_ALL_REQUEST });
    API.users.GET.all()
      .then(response => {
        dispatch({
          type: USERS_ALL_SUCCESS,
          users_all_data: getSuccessData(response)
        });
      })
      .catch(error => {
        dispatch({
          type: USERS_ALL_ERROR,
          users_all_error: getErrorData(error)
        });
      })
  };
};

/********** ONE **********/

export const getOneUser = (id) => {
  return dispatch => {
    dispatch({ type: USERS_ONE_REQUEST });
    API.users.GET.one(id)
      .then(response => {
        const users_one_data = getSuccessData(response);
        dispatch({
          type: USERS_ONE_SUCCESS,
          users_one_data
        });
      })
      .catch(error => {
        const users_one_error = getErrorData(error);
        dispatch({
          type: USERS_ONE_ERROR,
          users_one_error
        });
      })
  };
};

/********** NEW **********/

export const createNewUser = (attributes) => {
  return dispatch => {
    dispatch({ type: USERS_NEW_REQUEST });
    API.users.POST.new(attributes)
      .then(response => {
        const users_new_data = getSuccessData(response);
        dispatch(setNotification('success', users_new_data.message));
        dispatch({
          type: USERS_NEW_SUCCESS,
          users_new_data
        });
      })
      .catch(error => {
        const users_new_error = getErrorData(error);
        dispatch(setNotification('error', users_new_error));
        dispatch({
          type: USERS_NEW_ERROR,
          users_new_error
        });
      })
  };
};

/********** DELETE **********/

export const deleteUser = (id) => {
  return dispatch => {
    dispatch({ type: USERS_DELETE_REQUEST });
    API.users.DELETE.one(id)
      .then(response => {
        const users_delete_data = getSuccessData(response);
        dispatch(setNotification('success', users_delete_data.message));
        dispatch({
          type: USERS_DELETE_SUCCESS,
          users_delete_data
        });
      })
      .catch(error => {
        const users_delete_error = getErrorData(error);
        dispatch(setNotification('error', users_delete_error));
        dispatch({
          type: USERS_DELETE_ERROR,
          users_delete_error
        });
      })
  };
};