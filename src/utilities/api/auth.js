import axios from 'axios';

export const API = {
  auth: {
    GET: {
      adminExists: () => {
        return axios.get('/auth/admin-exists');
      }
    }
  }
};