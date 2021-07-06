import axios from 'axios';

export const API = {
  auth: {
    GET: {
      admin: () => {
        return axios.get('/auth/admin-exists');
      },

      user: () => {
        return axios.get('/auth/get-user');
      },
    },

    POST: {
      admin: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve('Hello');
          }, 2000);
        })
      }
    }
  }
};