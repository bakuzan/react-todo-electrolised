import React from 'react'
import {ConnectedRouter} from 'react-router-redux'
import {Redirect, Route, Switch} from 'react-router-dom';

import App from 'containers/app'
import Home from 'views/home/home'


const Routes = ({ history }) => (
  <App>
    <ConnectedRouter history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
      </Switch>
    </ConnectedRouter>
  </App>
)

export default Routes
