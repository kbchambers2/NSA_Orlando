import React, {Component} from 'react';
import NavBar from './NavBar';
import './styles/OurChapter.css';

class OurChapter extends Component {
  render() {
    return (
      <div><NavBar />
      <div className="chapterHeader"><h1 className="chapterTitle">Who Is NSA Orlando</h1></div>
      <div className="chapterMainBox">
        test
      </div>
    </div>
    );
  }
}

export default OurChapter;
