import { SET_MODAL, REQUESTING_MODAL_DATA, RECEIVED_MODAL_DATA, SET_SENDING_TRUE, SET_SENDING_FALSE } from './types';

export const setModalAC = modal => {
  return {
    type: SET_MODAL,
    payload: modal
  };
};

export const requestingModalDataAC = () => {
  return {
    type: REQUESTING_MODAL_DATA
  };
};

export const receivedModalDataAC = () => {
  return {
    type: RECEIVED_MODAL_DATA
  };
};

export const setSendingTrueAC = () => {
  return {
    type: SET_SENDING_TRUE
  };
};

export const setSendingFalseAC = () => {
  return {
    type: SET_SENDING_FALSE
  };
};