import axios from 'axios';

export const API = {
  
  auth: {

    GET: {

      admin: () => axios.get('/auth/admin-exists'),

      user: () => axios.get('/auth/get-user'),

      logout: () => axios.get('/auth/logout')

    },

    POST: {

      admin: (profile) => axios.post('/auth/create-admin', profile),

      login: (credentials) => axios.post('/auth/login', credentials)

    }
  }
};