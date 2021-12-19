import axios from 'axios';

export const API = {

    content: {

        GET: {

            all: contentTypeName => axios.get(`/api/content/all/${contentTypeName}`),

        },

        POST: {

        },

        DELETE: {

        }
    }
};