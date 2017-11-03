import React from 'react';
import {connect} from 'react-redux';


const App = ({ theme, children }) => (
  <main className={theme}>
  { children }
  </main>
)

const mapStateToProps = state => ({
  theme: state.theme.class
})

export default connect(
  mapStateToProps
)(App)
