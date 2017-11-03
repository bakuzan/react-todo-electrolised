import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {setApplicationTheme} from 'actions/theme'
import reactLogo from 'assets/logo.svg';
import electronLogo from 'assets/electron.svg'
import './home.css';

class Home extends Component {
  render() {
    const { theme, setApplicationTheme } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={reactLogo} className="App-logo" alt="react logo" />
          <img src={electronLogo} className="App-logo" alt="electron logo" />
          <h1 className="App-title">Welcome to React Electron</h1>
        </header>
        <p className="App-intro">
          Starting point for development
        </p>
        <div>
          <p>Pick theme</p>
          <button disabled={theme === "light"} onClick={() => setApplicationTheme("light")}>
            LIGHT
          </button>
          <button disabled={theme === "dark"} onClick={() => setApplicationTheme("dark")}>
            DARK
          </button>
        </div>
        <Link to="/test">
        Test
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.theme.class
})

const mapDispatchToProps = ({
  setApplicationTheme
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
