import { SET_CURRENT_CONTENT_TYPE, GET_ALL_CONTENT, SET_FIRST_FIELD, GET_CONTENT_FIELDS, REQUESTING_CONTENT_DATA, RECEIVED_CONTENT_DATA } from './types';
import { showContentAC } from './mainWindowActions';
import { setModalAC, requestingModalDataAC, receivedModalDataAC, setSendingTrueAC, setSendingFalseAC } from './modalActions';

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

const getContentFieldsAC = fields => {
  return {
    type: GET_CONTENT_FIELDS,
    payload: fields
  }
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

export const getContentFields = (contentType, modalType) => {
  return dispatch => {
    dispatch(setModalAC(modalType))
    dispatch(requestingModalDataAC());

    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/api/content-type/${contentType}`
    })
      .then(res => {
        const initialFields = res.data.contentType.fields;
        const fields = initialFields.filter(field => field.name !== 'owner_id');

        dispatch(getContentFieldsAC(fields));
        dispatch(receivedModalDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedModalDataAC());
        dispatch(setModalAC(null));
      })
  }
};

export const createNewContent = (contentItem, contentTypeName) => {
  return dispatch => {
    dispatch(setSendingTrueAC());

    Axios({
      method: 'POST',
      url: `${url}/api/content/${contentTypeName}`,
      withCredentials: true,
      data: contentItem
    })
      .then(res => {
        dispatch(setSendingFalseAC());
        dispatch(setModalAC(null));
        console.log(res);
      })
      .catch(e => {
        console.log(e);
        dispatch(setSendingFalseAC());
      })
  };
};