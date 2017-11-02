import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'containers/root'
import configureStore from 'store/configure-store'

import registerServiceWorker from './registerServiceWorker';
import './index.css';


const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
registerServiceWorker();
