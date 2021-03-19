import { SET_CURRENT_CONTENT_TYPE, GET_ALL_CONTENT, SET_FIRST_FIELD, REQUESTING_CONTENT_DATA, RECEIVED_CONTENT_DATA } from './types';
import { showContentAC } from './mainWindowActions';

import { url } from '../../Components/App';
import Axios from 'axios';

const requestingContentDataAC = () => {
  return {
    type: REQUESTING_CONTENT_DATA
  };
};

const receivedContentDataAC = () => {
  return {
    type: RECEIVED_CONTENT_DATA
  };
};

const setCurrentContentTypeAC = contentType => {
  return {
    type: SET_CURRENT_CONTENT_TYPE,
    payload: contentType
  };
};

const getAllContentAC = content => {
  return {
    type: GET_ALL_CONTENT,
    payload: content
  };
};

const setFirstFieldAC = field => {
  return {
    type: SET_FIRST_FIELD,
    payload: field
  };
};

export const showAllContent = contentType => {
  return dispatch => {
    dispatch(setCurrentContentTypeAC(contentType));
    dispatch(requestingContentDataAC());
    dispatch(showContentAC());

    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/api/content/all/${contentType}`
    })
      .then(res => {
        const fetchedContent = res.data.data[`${contentType}s`];
        let firstField = null;
        if(fetchedContent.length > 0) {
          firstField = Object.keys(fetchedContent[0])[0];
        }
        dispatch(setFirstFieldAC(firstField));
        dispatch(getAllContentAC(fetchedContent));
        dispatch(receivedContentDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedContentDataAC());
      })
  };
};