import {
    USERS_ALL_REQUEST,
    USERS_ALL_SUCCESS,
    USERS_ALL_ERROR,
    USERS_ONE_REQUEST,
    USERS_ONE_SUCCESS,
    USERS_ONE_ERROR,
    USERS_NEW_REQUEST,
    USERS_NEW_SUCCESS,
    USERS_NEW_ERROR,
    USERS_DELETE_REQUEST,
    USERS_DELETE_SUCCESS,
    USERS_DELETE_ERROR
  } from 'containers/users/actions';
  
  const initialState = {
    users_all_status: null,
    users_all_data: null,
    users_all_error: null,
    users_one_status: null,
    users_one_data: null,
    users_one_error: null,
    users_new_status: null,
    users_new_data: null,
    users_new_error: null,
    users_delete_status: null,
    users_delete_data: null,
    users_delete_error: null
  };
  
  const usersReducer = (state = initialState, action) => {
    switch (action.type) {
  
      case USERS_ALL_REQUEST: return {
        ...state,
        users_all_status: 'loading',
        users_all_data: null,
        users_all_error: null
      }
  
      case USERS_ALL_SUCCESS: return {
        ...state,
        users_all_status: 'success',
        users_all_data: action.users_all_data
      }
  
      case USERS_ALL_ERROR: return {
        ...state,
        users_all_status: 'error',
        users_all_error: action.users_all_error
      }
  
      case USERS_ONE_REQUEST: return {
        ...state,
        users_one_status: 'loading',
        users_one_data: null,
        users_one_error: null
      }
  
      case USERS_ONE_SUCCESS: return {
        ...state,
        users_one_status: 'success',
        users_one_data: action.users_one_data
      }
  
      case USERS_ONE_ERROR: return {
        ...state,
        users_one_status: 'error',
        users_one_error: action.users_one_error
      }
  
      case USERS_NEW_REQUEST: return {
        ...state,
        users_new_status: 'loading',
        users_new_data: null,
        users_new_error: null
      }
  
      case USERS_NEW_SUCCESS: return {
        ...state,
        users_new_status: 'success',
        users_new_data: action.users_new_data
      }
  
      case USERS_NEW_ERROR: return {
        ...state,
        users_new_status: 'error',
        users_new_error: action.users_new_error
      }
  
      case USERS_DELETE_REQUEST: return {
        ...state,
        users_delete_status: 'loading',
        users_delete_data: null,
        users_delete_error: null
      }
  
      case USERS_DELETE_SUCCESS: return {
        ...state,
        users_delete_status: 'success',
        users_delete_data: action.users_delete_data
      }
  
      case USERS_DELETE_ERROR: return {
        ...state,
        users_delete_status: 'error',
        users_delete_error: action.users_delete_error
      }
  
      default: return state;
  
    }
  };
  
  export default usersReducer;