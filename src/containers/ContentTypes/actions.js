import { API } from 'utilities/api/contentTypes';
import { getSuccessData, getErrorData } from 'utilities/commonActions';
import { setNotification } from 'components/Notification/actions';

export const CONTENT_TYPES_ALL_REQUEST = 'contentTypes/CONTENT_TYPES_ALL_REQUEST';
export const CONTENT_TYPES_ALL_SUCCESS = 'contentTypes/CONTENT_TYPES_ALL_SUCCESS';
export const CONTENT_TYPES_ALL_ERROR = 'contentTypes/CONTENT_TYPES_ALL_ERROR';

export const CONTENT_TYPES_ONE_REQUEST = 'contentTypes/CONTENT_TYPES_ONE_REQUEST';
export const CONTENT_TYPES_ONE_SUCCESS = 'contentTypes/CONTENT_TYPES_ONE_SUCCESS';
export const CONTENT_TYPES_ONE_ERROR = 'contentTypes/CONTENT_TYPES_ONE_ERROR';

export const CONTENT_TYPES_NEW_REQUEST = 'contentTypes/CONTENT_TYPES_NEW_REQUEST';
export const CONTENT_TYPES_NEW_SUCCESS = 'contentTypes/CONTENT_TYPES_NEW_SUCCESS';
export const CONTENT_TYPES_NEW_ERROR = 'contentTypes/CONTENT_TYPES_NEW_ERROR';


/********** ALL **********/

export const getAllcontentTypes = () => {
  return dispatch => {
    dispatch({ type: CONTENT_TYPES_ALL_REQUEST });
    API.contentTypes.GET.all()
      .then(response => {
        dispatch({
          type: CONTENT_TYPES_ALL_SUCCESS,
          content_types_all_data: getSuccessData(response)
        });
      })
      .catch(error => {
        dispatch({
          type: CONTENT_TYPES_ALL_ERROR,
          content_types_all_error: getErrorData(error)
        });
      })
  };
};

/********** ONE **********/

export const getOneContentType = (name) => {
  return dispatch => {
    dispatch({ type: CONTENT_TYPES_ONE_REQUEST });
    let content_types_one_error;
    API.contentTypes.GET.one(name)
      .then(response => {
        const content_types_one_data = getSuccessData(response);
        const { success, error } = content_types_one_data;

        if (success) {
          dispatch({
            type: CONTENT_TYPES_ONE_SUCCESS,
            content_types_one_data: getSuccessData(response)
          });
        } else {
          content_types_one_error = error;
        }
      })
      .catch(error => {
        content_types_one_error = getErrorData(error);
      })
      .finally(() => {
        if (content_types_one_error) {
          dispatch({
            type: CONTENT_TYPES_ONE_ERROR,
            content_types_one_error
          });
        }
      })
  };
};

/********** NEW **********/

export const createNewContentType = (attributes) => {
  return dispatch => {
    dispatch({ type: CONTENT_TYPES_NEW_REQUEST });
    let content_types_new_error;
    API.contentTypes.POST.new(attributes)
      .then(response => {
        const content_types_new_data = getSuccessData(response);
        const { success, error } = content_types_new_data;
        if (success) {
          dispatch({
            type: CONTENT_TYPES_NEW_SUCCESS,
            content_types_new_data
          });
        } else {
          content_types_new_error = error;
        }
      })
      .catch(error => {
        content_types_new_error = getErrorData(error);
      })
      .finally(() => {
        if (content_types_new_error) {
          dispatch({
            type: CONTENT_TYPES_NEW_ERROR,
            content_types_new_error
          });
        }
      })
  };
};