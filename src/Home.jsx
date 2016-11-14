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
        <p>NSA Orlando</p>

      </div>

      </div>
    );
  }
}

export default Home;
