import {
    CONTENT_ALL_REQUEST,
    CONTENT_ALL_SUCCESS,
    CONTENT_ALL_ERROR,
    CONTENT_ONE_REQUEST,
    CONTENT_ONE_SUCCESS,
    CONTENT_ONE_ERROR,
    CONTENT_NEW_REQUEST,
    CONTENT_NEW_SUCCESS,
    CONTENT_NEW_ERROR,
    CONTENT_DELETE_REQUEST,
    CONTENT_DELETE_SUCCESS,
    CONTENT_DELETE_ERROR
} from 'containers/content/actions';

const initialState = {
    content_all_status: null,
    content_all_data: null,
    content_all_error: null,
    content_one_status: null,
    content_one_data: null,
    content_one_error: null,
    content_new_status: null,
    content_new_data: null,
    content_new_error: null,
    content_delete_status: null,
    content_delete_data: null,
    content_delete_error: null
};

const contentReducer = (state = initialState, action) => {
    switch (action.type) {

        case CONTENT_ALL_REQUEST: return {
            ...state,
            content_all_status: 'loading',
            content_all_data: null,
            content_all_error: null
        }

        case CONTENT_ALL_SUCCESS: return {
            ...state,
            content_all_status: 'success',
            content_all_data: action.content_all_data
        }

        case CONTENT_ALL_ERROR: return {
            ...state,
            content_all_status: 'error',
            content_all_error: action.content_all_error
        }

        default: return state;

    }
};

export default contentReducer;