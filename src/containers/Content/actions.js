import { API } from 'utilities/api/content';
import { getSuccessData, getErrorData } from 'utilities/commonActions';
import { setNotification } from 'components/Notification/actions';

export const CONTENT_ALL_REQUEST = 'content/CONTENT_ALL_REQUEST';
export const CONTENT_ALL_SUCCESS = 'content/CONTENT_ALL_SUCCESS';
export const CONTENT_ALL_ERROR = 'content/CONTENT_ALL_ERROR';


/********** NEW **********/

export const getAllContent = (contentTypeName) => {
    return dispatch => {
        dispatch({ type: CONTENT_ALL_REQUEST });
        API.content.GET.all(contentTypeName)
            .then(response => {
                const content_all_data = getSuccessData(response);
                dispatch({
                    type: CONTENT_ALL_SUCCESS,
                    content_all_data
                });
            })
            .catch(error => {
                const content_all_error = getErrorData(error);
                dispatch({
                    type: CONTENT_ALL_ERROR,
                    content_all_error
                });
            })
    };
};