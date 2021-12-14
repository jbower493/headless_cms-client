import axios from 'axios';

export const API = {
  
  users: {

    GET: {

      all: () => axios.get(`/api/users`),

      one: id => axios.get(`/api/user/${id}`)

    },

    POST: {

      new: (attributes) => axios.post(`/api/user`, attributes)

    },

    DELETE: {

      one: id => axios.delete(`/api/user/${id}`)

    }
  }
};