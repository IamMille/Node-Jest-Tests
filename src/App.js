import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inner from './14-Inner.js';
import Pages from './15-pageNumber.js';
import Form from './16-Form.js';

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
        <h2>Form (#16)</h2>
        <Form />
      </p>

      <p>
        <h2>Page Numbers (#15)</h2>
        <Pages />
      </p>

      <p>
        <h2>This is inner (#14)</h2>
        <Inner />
      </p>

      <p>
        <h2>countUp & countDown (#11)</h2>
        <button onClick={this.clickButton.bind(this)}>Set state value to 1</button>
      </p>

    </div>;
  }
}

export default App;
