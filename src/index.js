import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Operations from './scenes/operations';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import {store } from './redux/state';

ReactDOM.render(
  <Provider store={store}>
    <Operations />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
