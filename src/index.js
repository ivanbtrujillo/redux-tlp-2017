// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import Operations from './scenes/operations';
// import registerServiceWorker from './registerServiceWorker';

// import { Provider } from 'react-redux';
// import {store } from './redux/state';

// ReactDOM.render(
//   <Provider store={store}>
//     <Operations />
//   </Provider>, 
//   document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';
import Operations from './scenes/operations';
import GameOfThrones from './scenes/game-of-thrones';

import registerServiceWorker from './registerServiceWorker';

import { store, history } from './redux/state';
import { Provider } from 'react-redux';

// React router
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div >
        <Header />
        <div className="pageContent">
          <Route exact path="/" component={Operations}/>
          <Route path="/game-of-thrones" component={GameOfThrones} />
        </div>
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
