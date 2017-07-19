import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Operations from './scenes/operations';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Operations />, document.getElementById('root'));
registerServiceWorker();
