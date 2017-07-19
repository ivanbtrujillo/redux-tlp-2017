import { createStore } from 'redux';
import appState from '../reducers';

export const store = creatStore(
  appState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)