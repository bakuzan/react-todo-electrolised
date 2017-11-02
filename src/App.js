import React, { Component } from 'react';
import reactLogo from './logo.svg';
import electronLogo from './electron.svg'

import './App.css';

class App extends Component {
  render() {

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
      </div>
    );
  }
}

export default App;
