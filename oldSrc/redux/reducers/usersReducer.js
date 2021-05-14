import { REQUESTING_USERS_DATA, RECEIVED_USERS_DATA, GET_USERS } from '../actions/types';

const initialState = {
  users: [],
  fetchingUsersData: false
};

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case REQUESTING_USERS_DATA:
      return {
        ...state,
        fetchingUsersData: true
      };
    case RECEIVED_USERS_DATA:
      return {
        ...state,
        fetchingUsersData: false
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  };
};

export default usersReducer;