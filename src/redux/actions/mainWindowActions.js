import { SHOW_DASHBOARD, SHOW_CONTENT_TYPES, SHOW_USERS } from './types';

const showDashboardAC = () => {
  return {
    type: SHOW_DASHBOARD
  };
};

const showContentTypesAC = () => {
  return {
    type: SHOW_CONTENT_TYPES
  };
};

const showUsersAC = () => {
  return {
    type: SHOW_USERS
  };
};

export const showDashboard = () => {
  return (dispatch) => {
    dispatch(showDashboardAC());
  };
};

export const showContentTypes = () => {
  return (dispatch) => {
    dispatch(showContentTypesAC());
  };
};

export const showUsers = () => {
  return (dispatch) => {
    dispatch(showUsersAC());
  };
};