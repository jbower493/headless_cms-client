import { REQUESTING_CONTENT_TYPES_DATA, RECEIVED_CONTENT_TYPES_DATA, GET_CONTENT_TYPES } from '../actions/types';

const initialState = {
  contentTypes: [],
  fetchingContentTypesData: false
};

const contentTypesReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUESTING_CONTENT_TYPES_DATA:
      return {
        ...state,
        fetchingContentTypesData: true
      };
    case RECEIVED_CONTENT_TYPES_DATA:
      return {
        ...state,
        fetchingContentTypesData: false
      };
    case GET_CONTENT_TYPES:
      return {
        ...state,
        contentTypes: action.payload
      };
    default:
      return state;
  };
};

export default contentTypesReducer;