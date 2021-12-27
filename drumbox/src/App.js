import logo from './logo.svg';
import './App.css';
import ReactFCCtest from 'react-fcctest';
import React from 'react';






class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleQ = this.handleQ.bind(this);
    this.handleW = this.handleW.bind(this);
    this.handleE = this.handleE.bind(this);
    this.handleA = this.handleA.bind(this);
    this.handleS = this.handleS.bind(this);
    this.handleD = this.handleD.bind(this);
    this.handleZ = this.handleZ.bind(this);
    this.handleX = this.handleX.bind(this);
    this.handleC = this.handleC.bind(this);
    

    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
   document.addEventListener("keydown",this.handleKeyPress)
  }
  componentWillUnmount() {
   this.audioContext.close(); 
   document.removeEventListener("keydown",this.handleKeyPress)
   
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }

  handleQ() {
   
document.getElementById('Q').play();
   
    this.setState((state) => ({
      message: '"clap1"'
    }));
  }


  handleW() {
    document.getElementById('W').play()
    this.setState((state) => ({
      message: '"clap2"'
    }));
  }

  handleE() {
    document.getElementById('E').play()
    this.setState((state) => ({
      message: '"clearBox"'
    }));
  }

  handleA() {
    document.getElementById('A').play()
    this.setState((state) => ({
      message: '"kick"'
    }));
  }

  handleS() {
    document.getElementById('S').play()
    this.setState((state) => ({
      message: '"cymbal2"'
    }));
  }

  handleD() {
    document.getElementById('D').play()
    this.setState((state) => ({
      message: '"cymbal3"'
    }));
  }

  handleZ() {
    document.getElementById('Z').play()
    this.setState((state) => ({
      message: '"highHat"'
    }));
  }

  handleX() {
    document.getElementById('X').play()
    this.setState((state) => ({
      message: '"tom1"'
    }));
  }

  handleC() {
    document.getElementById('C').play()
    this.setState((state) => ({
      message: '"tom2"'
    }));
  }
  handleKeyPress(event) {

    // eslint-disable-next-line default-case
    switch (event.keyCode) {

      case 81: this.handleQ();
      break;
      // eslint-disable-next-line no-fallthrough
      case 87: this.handleW();
      break;

      case 69: this.handleE();
      break;

      case 65: this.handleA();
      break;

      case 83: this.handleS();
      break;

      case 68: this.handleD();
      break;

      case 90: this.handleZ();      
      break;

      case 88: this.handleX();
      break;

      case 67: this.handleC();
      break;

    }  
      
        
    


    
  }
  

  render() {

  return (

    
    <div className="App" id="drum-machine">


      <ReactFCCtest />
      <header className="App-header">
      <p>DrumBox</p>
      <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="keyBoard">

      
       <div className="drum-pad" id="clap1" onClick={this.handleQ}><audio 
       src="keys/clap1.wav"
       className="clip"
       id="Q"
       ></audio>
         Q</div>
       <div className="drum-pad" id="clap2" onClick={this.handleW}><audio 
       src="keys/clap2.wav"
       className="clip"
       id="W"
       ></audio>
         W</div>
       <div className="drum-pad" id="clearBox" onClick={this.handleE}><audio 
       src="keys/clearBox.wav" 
       className="clip"
       id="E"
       ></audio>
         E</div>
       <div className="drum-pad" id="kick" onClick={this.handleA}><audio 
       src="keys/kick.mp3"
       className="clip"
       id="A"
       ></audio>
         A</div>
       <div className="drum-pad" id="cymbal2" onClick={this.handleS}><audio 
       src="keys/cymbal2.wav"
       className="clip"
       id="S"
       ></audio>
         S</div>
       <div className="drum-pad" id="cymbal3" onClick={this.handleD}>
         <audio src="keys/cymbal3.wav"
       className="clip"
       id="D"
       ></audio>
         D</div>
       <div className="drum-pad" id="highHat"onClick={this.handleZ}><audio 
       src="keys/highHat.wav"
       className="clip"
       id="Z"
       ></audio>
         Z</div>
       <div className="drum-pad" id="tom1" onClick={this.handleX}>
         <audio src="keys/tom1.wav" className="clip"
       id="X"
       ></audio>
         X</div>
       <div className="drum-pad" id="tom2" onClick={this.handleC}>
         <audio src="keys/tom2.wav" className="clip"
       id="C"
       ></audio>
         C</div>

      </div> 
      <div id="display">      
      <h1>{this.state.message}</h1></div>
      </div>
  );
};
}
export default App;

///to be refactored using redux (see: http://joesul.li/van/react-and-web-audio/)