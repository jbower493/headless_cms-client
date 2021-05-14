import { REQUESTING_CONTENT_TYPES_DATA, RECEIVED_CONTENT_TYPES_DATA, GET_CONTENT_TYPES } from './types';

import { url } from '../../Components/App';
import Axios from 'axios';

const requestingContentTypesDataAC = () => {
  return {
    type: REQUESTING_CONTENT_TYPES_DATA
  };
};

const receivedContentTypesDataAC = () => {
  return {
    type: RECEIVED_CONTENT_TYPES_DATA
  };
};

const getContentTypesAC = contentTypes => {
  return {
    type: GET_CONTENT_TYPES,
    payload: contentTypes
  };
};

export const getContentTypes = () => {
  return dispatch => {
    dispatch(requestingContentTypesDataAC());

    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/API/CONTENT-TYPES`
    })
      .then(res => {
        dispatch(getContentTypesAC(res.data.contentTypes));
        dispatch(receivedContentTypesDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedContentTypesDataAC());
      })
  };
};