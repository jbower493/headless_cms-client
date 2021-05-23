/*----------Base imports----------*/
import React from 'react';
import ReactDOM from 'react-dom';
import store from 'store/store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { url } from 'config/config.json';

/*----------Components, sections, modules----------*/
import App from 'app/app';

/*----------Shared components----------*/

/*----------Actions----------*/

/*----------Component start----------*/

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);