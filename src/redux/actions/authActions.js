import { CHECK_FOR_ADMIN, GET_USER, LOGIN, LOGOUT, REQUESTING_AUTH_DATA, RECEIVED_AUTH_DATA } from './types';
import Axios from 'axios';

import { url } from '../../Components/App';

const checkForAdminAC = (adminExists) => {
  return {
    type: CHECK_FOR_ADMIN,
    payload: adminExists
  }
};

const getUserAC = (user) => {
  return {
    type: GET_USER,
    payload: user
  }
};

const loginAC = (user) => {
  return {
    type: LOGIN,
    payload: user
  }
};

const logoutAC = () => {
  return {
    type: LOGOUT
  }
};

const requestingAuthDataAC = () => {
  return {
    type: REQUESTING_AUTH_DATA
  }
};

const receivedAuthDataAC = () => {
  return {
    type: RECEIVED_AUTH_DATA
  }
};


// these exported actions are used as event handlers

export const initialRequest = () => {
  return (dispatch) => {
    dispatch(requestingAuthDataAC());

    Axios({
      method: 'GET',
      withCredentials: true,
      url: `${url}/auth/admin-exists`
    })
      .then(res => {
        dispatch(checkForAdminAC(res.data.adminExists));
        
        if(!res.data.adminExists) {
          dispatch(receivedAuthDataAC());
        } else {
          Axios({
            method: 'GET',
            withCredentials: true,
            url: `${url}/auth/get-user`
          })
            .then(res => {
              if(res.data.success) {
                dispatch(getUserAC(true/*res.data.user*/));
              }
              dispatch(receivedAuthDataAC());
            })
        }
      })
      .catch(e => {
        console.log(e);
        dispatch(checkForAdminAC(false));
        dispatch(getUserAC(null));
        dispatch(receivedAuthDataAC());
      })
  };
};

// export const checkForAdmin = () => {
//   return (dispatch) => {
//     dispatch(requestingAuthDataAC());

//     Axios({
//       method: 'GET',
//       withCredentials: true,
//       url: `${url}/auth/admin-exists`
//     })
//       .then(res => {
//         dispatch(checkForAdminAC(res.data.adminExists));
//         dispatch(receivedAuthDataAC());
//       })
//       .catch(e => {
//         console.log(e);
//         dispatch(checkForAdminAC(false));
//         dispatch(receivedAuthDataAC());
//       })
//   };
// };

// export const getUser = () => {
//   return (dispatch) => {
//     // set fetchingAuthData to true so loading widget can be displayed
//     dispatch(requestingAuthDataAC());

//     Axios({
//       method: 'GET',
//       withCredentials: true,
//       url: `${url}/auth/get-user`
//     })
//       .then(res => {
//         if(res.data.success) {
//           dispatch(getUserAC(res.data.user));
//         }
//         // set fetchingAuthData back to false after response is received
//         dispatch(receivedAuthDataAC());
//       })
//       .catch(e => {
//         console.log(e);
//         dispatch(getUserAC(null));
//         // set fetchingAuthData back to false if there is an error
//         dispatch(receivedAuthDataAC());
//       })
//   };
// };