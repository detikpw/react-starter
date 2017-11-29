import React, { Component } from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Fabric><DefaultButton>I am a button.</DefaultButton></Fabric>
        <span className="ms-font-su ms-fontColor-themePrimary">Big blue text</span>
        <i className="ms-Icon ms-Icon--Mail" aria-hidden="true"></i>
      </div>
    );
  }
}

export default App;
