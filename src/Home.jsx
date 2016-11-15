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
            <li className="homeImages"><img src={require('../img/groupbowling.jpeg')} alt="Members"/>
              <div className="gallery-text">
                <h3>Check Out The Team</h3>
              </div>
            </li>
            <li className="homeImages"><img src={require('../img/Downtown.jpg')} alt="Our Chapter"/>
              <div className="gallery-text">
                <h3>Our Chapter</h3>
              </div>
            </li>
            <li className="homeImages"><img src={require('../img/calendar-photo.png')} alt="Calendar"/>
              <div className="gallery-text">
                <h3>What's Next</h3>
              </div>
            </li>
            <li className="homeImages"><img src={require('../img/connect2.jpg')} alt="Connect"/>
              <div className="gallery-text">
                <h3>We Love Making
                  <i>New Friends</i>
                </h3>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
