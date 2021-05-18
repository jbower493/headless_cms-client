import React from 'react';
import ReactDOM from 'react-dom';
//import './scss/style.scss';
import App from './containers/app/app';

//import store from './redux/store';
import { Provider } from 'react-redux';

import axios from 'axios';
import { url } from './config/config.json';

axios.defaults.baseURL = url;
axios.defaults.withCredentials = true;


ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);