import axios from 'axios';

export const API = {
  
  auth: {

    GET: {

      admin: () => axios.get('/auth/admin-exists'),

      user: () => axios.get('/auth/get-user'),

    },

    POST: {

      admin: (profile) => {console.log(profile);return axios.post('/auth/create-admin', profile)}

    }
  }
};