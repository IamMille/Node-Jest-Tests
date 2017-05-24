import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inner from './14-Inner.js';
import Pages from './15-pageNumber.js';
//const Inner = require('./Inner.js');

class App extends Component
{
  constructor() {
    super(...arguments);
    this.state = {value: 0};
  }

  clickButton() {
    this.setState({value: 1});
  }

  render() {
    return <div className="App">

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world</h1>
      </div>

      <p>
        <h3>countUp & countDown (#11)</h3>
        <button onClick={this.clickButton.bind(this)}>Set state value to 1</button>
      </p>

      <p>
        <h3>This is inner (#14)</h3>
        <Inner />
      </p>

      <p>
        <h3>Page Numbers (#15)</h3>
        <Pages />
      </p>

    </div>;
  }
}

export default App;
