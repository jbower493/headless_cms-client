import axios from 'axios';

export const API = {
  
  auth: {

    GET: {

      admin: () => axios.get('/auth/admin-exists'),

      user: () => axios.get('/auth/get-user'),

    },

    POST: {

      admin: (profile) => axios.post('/auth/create-admin', profile)

    }
  }
};