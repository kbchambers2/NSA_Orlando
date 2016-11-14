import React, { Component } from 'react';
import './styles/App.css';
import { Link } from 'react-router';
import routes from './config/Routes';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nav Bar</h1>
          <NavBar />
          {this.props.children}
      </div>
    );
  }
}

export default App;
