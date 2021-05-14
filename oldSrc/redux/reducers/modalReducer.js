import { SET_MODAL, REQUESTING_MODAL_DATA, RECEIVED_MODAL_DATA, SET_SENDING_TRUE, SET_SENDING_FALSE } from '../actions/types';

const initialState = {
  modal: null,
  fetchingModalData: false,
  sending: false
};

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_MODAL:
      return Object.assign({}, state, { modal: action.payload });
    case REQUESTING_MODAL_DATA:
      return Object.assign({}, state, { fetchingModalData: true });
    case RECEIVED_MODAL_DATA:
      return Object.assign({}, state, { fetchingModalData: false });
    case SET_SENDING_TRUE:
      return Object.assign({}, state, { sending: true });
    case SET_SENDING_FALSE:
      return Object.assign({}, state, { sending: false });
    default:
      return Object.assign({}, state);
  }
};

export default modalReducer;