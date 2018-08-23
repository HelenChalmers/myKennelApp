//Componenent is an object
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

//return can only return one thing (one div container)
// c
  render() {
    const myName = "Helen";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>{myName}</h2>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
