import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {Route} from 'react-router-dom';

import App from 'containers/app'

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Route path="/" component={App} />
  </ConnectedRouter>
)

export default Routes
