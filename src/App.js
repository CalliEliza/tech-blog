import React, { Component } from 'react';
import '../vender';
import logo1 from '../img/home.jpg';
import './clean-blog.min.css';
import './index.css';
import './bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo1} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
