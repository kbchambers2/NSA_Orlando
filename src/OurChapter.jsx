import React, {Component} from 'react';
import NavBar from './NavBar';
import './styles/OurChapter.css';
import GoogleMapLoader from './SimpleMap';



// <div className="chapterHeader">
//   <h1 className="chapterTitle">Who Is NSA Orlando</h1>
// </div>

class OurChapter extends Component {
  render() {
    return (
      <div><NavBar/>
        <div className="chapterContainer">
          <div className="chapterTitleBox">
            <h1 className="chapterTitle">
              <strong>NSA ORLANDO</strong>
            </h1>
          </div>
        </div>
        <div className="chapterVideoContainer">
      <iframe className="iframeVideo" width="853" height="480" src="https://www.youtube.com/embed/GaIrNmNy3A4?rel=0" frameBorder="0" allowFullscreen></iframe>
        </div>
        <div className="groupDinner">
        </div>
        <div className="info">
          <p className="infoTitle">Swing By And Check Out A Meeting!</p>
          <br/>
          <br/>
          <p className="infoTitle">Meetings are held on the second Wednesday of each month from 7:00 – 8:30 pm<br/>at the Innovation Center Building – 3280 Progress Drive Suite #500 Orlando, FL 32826.</p>
        <GoogleMapLoader/>
        </div>

      </div>
    );
  }
}

export default OurChapter;

// <div className="chapterVideoContainer">
//    <div class="video-wrapper">
//       <iframe class="iframeVideo" width="864" height="486" src="https://youtu.be/GaIrNmNy3A4" frameborder="0" allowfullscreen style="margin-top: 60px; margin-bottom: 60px;"></iframe>
//     </div>
// </div>
