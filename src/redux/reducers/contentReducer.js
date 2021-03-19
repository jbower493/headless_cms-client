import { SET_CURRENT_CONTENT_TYPE, GET_ALL_CONTENT, SET_FIRST_FIELD, REQUESTING_CONTENT_DATA, RECEIVED_CONTENT_DATA } from '../actions/types';

const initialState = {
  currentContentType: null,
  contentItems: [],
  fetchingContentData: false,
  firstField: null
};

const contentReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUESTING_CONTENT_DATA:
      return {
        ...state,
        fetchingContentData: true
      };
    case RECEIVED_CONTENT_DATA:
      return {
        ...state,
        fetchingContentData: false
      };
    case SET_CURRENT_CONTENT_TYPE:
      return {
        ...state,
        currentContentType: action.payload
      };
    case GET_ALL_CONTENT:
      return {
        ...state,
        contentItems: action.payload
      };
    case SET_FIRST_FIELD:
      return {
        ...state,
        firstField: action.payload
      };
    default:
      return state;
  };
};

export default contentReducer;