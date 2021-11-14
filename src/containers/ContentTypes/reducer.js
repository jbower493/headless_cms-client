import {
  CONTENT_TYPES_ALL_REQUEST,
  CONTENT_TYPES_ALL_SUCCESS,
  CONTENT_TYPES_ALL_ERROR,
  CONTENT_TYPES_ONE_REQUEST,
  CONTENT_TYPES_ONE_SUCCESS,
  CONTENT_TYPES_ONE_ERROR,
  CONTENT_TYPES_NEW_REQUEST,
  CONTENT_TYPES_NEW_SUCCESS,
  CONTENT_TYPES_NEW_ERROR,
  CONTENT_TYPES_DELETE_REQUEST,
  CONTENT_TYPES_DELETE_SUCCESS,
  CONTENT_TYPES_DELETE_ERROR
} from 'containers/contentTypes/actions';

const initialState = {
  content_types_all_status: null,
  content_types_all_data: null,
  content_types_all_error: null,
  content_types_one_status: null,
  content_types_one_data: null,
  content_types_one_error: null,
  content_types_new_status: null,
  content_types_new_data: null,
  content_types_new_error: null,
  content_types_delete_status: null,
  content_types_delete_data: null,
  content_types_delete_error: null
};

const contentTypesReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONTENT_TYPES_ALL_REQUEST: return {
      ...state,
      content_types_all_status: 'loading',
      content_types_all_data: null,
      content_types_all_error: null
    }

    case CONTENT_TYPES_ALL_SUCCESS: return {
      ...state,
      content_types_all_status: 'success',
      content_types_all_data: action.content_types_all_data
    }

    case CONTENT_TYPES_ALL_ERROR: return {
      ...state,
      content_types_all_status: 'error',
      content_types_all_error: action.content_types_all_error
    }

    case CONTENT_TYPES_ONE_REQUEST: return {
      ...state,
      content_types_one_status: 'loading',
      content_types_one_data: null,
      content_types_one_error: null
    }

    case CONTENT_TYPES_ONE_SUCCESS: return {
      ...state,
      content_types_one_status: 'success',
      content_types_one_data: action.content_types_one_data
    }

    case CONTENT_TYPES_ONE_ERROR: return {
      ...state,
      content_types_one_status: 'error',
      content_types_one_error: action.content_types_one_error
    }

    case CONTENT_TYPES_NEW_REQUEST: return {
      ...state,
      content_types_new_status: 'loading',
      content_types_new_data: null,
      content_types_new_error: null
    }

    case CONTENT_TYPES_NEW_SUCCESS: return {
      ...state,
      content_types_new_status: 'success',
      content_types_new_data: action.content_types_new_data
    }

    case CONTENT_TYPES_NEW_ERROR: return {
      ...state,
      content_types_new_status: 'error',
      content_types_new_error: action.content_types_new_error
    }

    case CONTENT_TYPES_DELETE_REQUEST: return {
      ...state,
      content_types_delete_status: 'loading',
      content_types_delete_data: null,
      content_types_delete_error: null
    }

    case CONTENT_TYPES_DELETE_SUCCESS: return {
      ...state,
      content_types_delete_status: 'success',
      content_types_delete_data: action.content_types_delete_data
    }

    case CONTENT_TYPES_DELETE_ERROR: return {
      ...state,
      content_types_delete_status: 'error',
      content_types_delete_error: action.content_types_delete_error
    }

    default: return state;

  }
};

export default contentTypesReducer;