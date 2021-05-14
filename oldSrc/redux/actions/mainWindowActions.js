import { SHOW_DASHBOARD, SHOW_CONTENT_TYPES, SHOW_USERS, SHOW_CONTENT } from './types';

export const showDashboardAC = () => {
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

export const showContentAC = () => {
  return {
    type: SHOW_CONTENT
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

export const showContent = () => {
  return (dispatch) => {
    dispatch(showContentAC());
  };
};