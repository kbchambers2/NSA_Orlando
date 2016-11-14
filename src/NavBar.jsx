import React, {Component} from 'react';
import { Link } from 'react-router';
import './styles/NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className="navBox">
      <div className="navControl">
        <div className="nsaTitle"><Link to="/home">NSA Orlando</Link></div>
        <div className="navUL">
        <ul className="navMenu" role="nav">
          <li className="navItems"><Link to="/about">About</Link></li>
          <li className="navItems"><Link to="/members">Members</Link></li>
          <li className="navItems"><Link to="/ourchapter">Our Chapter</Link></li>
          <li className="navItems"><Link to="/calendar">Calendar</Link></li>
          <li className="navItems"><Link to="/connect">Connect</Link></li>
        </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default NavBar;
