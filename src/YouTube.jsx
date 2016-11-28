import React, {Component} from 'react';
import YouTubeReact from 'react-youtube';

class YouTube extends Component {
  render() {
    const opts = {
      height: '486',
      width: '864',
      playerVars: { 'https://www.youtube.com/watch?v=GaIrNmNy3A4'
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="GaIrNmNy3A4"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }
  _onReady(event) {

  event.target.pauseVideo();
 }
}

export default YouTube;
