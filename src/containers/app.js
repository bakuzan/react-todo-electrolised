import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';

import Home from 'views/home/home'


const App = ({ theme }) => (
  <main className={theme}>
    <Route exact path="/" component={Home} />
  </main>
)

const mapStateToProps = state => ({
  theme: state.theme.class
})

export default connect(
  mapStateToProps
)(App)
