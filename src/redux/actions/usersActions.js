import { REQUESTING_USERS_DATA, RECEIVED_USERS_DATA, GET_USERS } from './types';

import { url } from '../../Components/App';
import Axios from 'axios';

const requestingUsersDataAC = () => {
  return {
    type: REQUESTING_USERS_DATA
  }
};

const receivedUsersDataAC = () => {
  return {
    type: RECEIVED_USERS_DATA
  }
};

const getUsersAC = users => {
  return {
    type: GET_USERS,
    payload: users
  }
};

export const getUsers = () => {
  return dispatch => {
    dispatch(requestingUsersDataAC());

    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/api/users`
    })
      .then(res => {
        dispatch(getUsersAC(res.data.users));
        dispatch(receivedUsersDataAC());
      })
      .catch(e => {
        console.log(e);
        dispatch(receivedUsersDataAC());
      })
  };
};