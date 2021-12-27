import React from 'react';


class AudioEngine extends React.Component {
  
    componentWillMount() {
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
     
    }
    
    componentWillUnmount() {
      this.audioContext.close();
    }
    render() {
      return null;
    }
  }

  export default AudioEngine; 