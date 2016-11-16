import React, {Component} from 'react';
import {Link} from 'react-router';
import './styles/NavBar.css';
// import { stack as Menu } from 'react-burger-menu';
// import Radium from 'radium';

// class NavBar extends Component {
//   render() {
//     return (
//       <div className="navBox">
//       <div className="navControl">
//         <div className="nsaTitle"><Link to="/home">NSA Orlando</Link></div>
//         <div className="navUL">
//         <ul className="navMenu" role="nav">
//           <li className="navItems"><Link to="/members">Members</Link></li>
//           <li className="navItems"><Link to="/ourchapter">Our Chapter</Link></li>
//           <li className="navItems"><Link to="/calendar">Calendar</Link></li>
//           <li className="navItems"><Link to="/connect">Connect</Link></li>
//         </ul>
//         </div>
//       </div>
//       </div>
//     );
//   }
// }

class NavBar extends Component {
  render() {
    return (
      <div className="navBox">
        <div className="navControl">
          <div className="nsaTitle">
            <Link to="/home">NSA Orlando</Link>
          </div>
          <div className="navUL">

            <div id="menuToggle">
              <input type="checkbox"/>
              <span></span>
              <span></span>
              <span></span>
              <ul className="navMenu" role="nav">
                <li className="navItems">
                  <Link to="/members"><i className="fa fa-globe" aria-hidden="true"></i>&nbsp;&nbsp;Members</Link>
                </li>
                <li className="navItems">
                  <Link to="/ourchapter"><i className="fa fa-paper-plane" aria-hidden="true"></i>&nbsp;&nbsp;Our Chapter</Link>
                </li>
                <li className="navItems">
                  <Link to="/calendar"><i className="fa fa-calendar-check-o" aria-hidden="true"></i>&nbsp;&nbsp;Calendar</Link>
                </li>
                <li className="navItems">
                  <Link to="/connect"><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;Connect</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default NavBar;
