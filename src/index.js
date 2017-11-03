import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createMemoryHistory';

import Root from 'containers/root'
import configureStore from 'store/configure-store'

import registerServiceWorker from './registerServiceWorker';
import './index.css';


const history = createHistory();
const store = configureStore(history);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
registerServiceWorker();
