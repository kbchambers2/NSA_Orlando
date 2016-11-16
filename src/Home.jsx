import React, {Component} from 'react';
import {Link} from 'react-router';
import App from './App';
import NavBar from './NavBar';
import './styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="homeParentBox">
        <div className="navBarHome"><NavBar/></div>
        <div className="topBox">
          <p className="chapterName">
            <strong className="NSA">WELCOME </strong>
            <i>NSA Orlando</i>
          </p>
        </div>
        <div className="footerImages">
          <ul className="imageList">
            <Link to="/members">
            <li className="homeImages"><img src={require('../img/bowling1.png')} alt="Members"/>
              <div className="gallery-text">
                <h3>Meet The Team</h3>
              </div>
            </li>
          </Link>
          <Link to="/ourchapter">
            <li className="homeImages"><img src={require('../img/downtownorlando.png')} alt="Our Chapter"/>
              <div className="gallery-text">
                <h3>Our Chapter</h3>
              </div>
            </li>
          </Link>
          <Link to="/calendar">
            <li className="homeImages"><img src={require('../img/calendar-photo.png')} alt="Calendar"/>
              <div className="gallery-text">
                <h3>What's Next</h3>
              </div>
            </li>
          </Link>
          <Link to="/connect">
            <li className="homeImages"><img src={require('../img/connectnew.png')} alt="Connect"/>
              <div className="gallery-text">
                <h3>We Love Making&nbsp;
                  <i>New Friends</i>
                </h3>
              </div>
            </li>
          </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
