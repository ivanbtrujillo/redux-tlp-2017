import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { counter, gameOfThrones } from '../reducers';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'
import ReduxPromise from 'redux-promise';

export const history = createHistory();
const middleware = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    counter,
    gameOfThrones,
    router: routerReducer
  }),
  compose(
    applyMiddleware(middleware, ReduxPromise),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

