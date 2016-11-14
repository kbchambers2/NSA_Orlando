import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Nav Bar</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/ourchapter">OurChapter</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/connect">Connect</Link></li>
        </ul>
         {this.props.childen}
      </div>
    );
  }
}

export default App;
