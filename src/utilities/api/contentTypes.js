import axios from 'axios';

export const API = {
  
  contentTypes: {

    GET: {

      all: () => axios.get(`/api/content-types`),

      one: name => axios.get(`/api/content-type/${name}`)

    },

    POST: {

      new: (attributes) => axios.post(`/api/content-type`, attributes)

    }
  }
};