import React, {Component} from 'react';
import { Link } from 'react-router';
import App from './App';
import NavBar from './NavBar';
import './styles/Home.css';


class Home extends Component {
  render() {
    return (
      <div>
      <div className="navBarHome"><NavBar /></div>
      <div className="topBox">
        <p className="chapterName"><strong className="NSA">WELCOME </strong><i>NSA Orlando</i></p>
      </div>
      <div className="footerImages">
        <ul className="imageList">
          <li>
            <div className="membersBox">
              <p>Members</p>
              <p>Meet the people <br/> who make this chapter tick</p>
            </div>
          </li>
          <li><img src={require('../img/Downtown.jpg')} alt="Our Chapter"/></li>
          <li><img src={require('../img/calendar-photo.png')} alt="Calendar"/></li>
          <li><img src="" alt="Connect"/></li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Home;
