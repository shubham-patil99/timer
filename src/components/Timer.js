import * as React from "react"
import "./style.css"
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

class Timer extends Component {
  data;
  constructor(props) {
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.timerSubmit = this.timerSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0
    }
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  timerSubmit = (e) => {
    e.preventDefault()
   localStorage.setItem('key',JSON.stringify(this.state));
}

  getData = (e) => {
    e.preventDefault()
   console.log( localStorage.getItem('key',JSON.parse(this.state)));
  }

componentDidMount() {
  this.data = JSON.parse(localStorage.getItem('key'));

  if (localStorage.getItem('key')) {
      this.setState({
          hours: this.data.hours,
         minutes: this.data.minutes,
         seconds: this.data.seconds
  })
} else {
  this.setState({
    hours: '',
    minutes: '',
    seconds: ''
  })
}
}


  convertToSeconds = ( hours, minutes,seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
  }

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    const  { hours, minutes, seconds } = this.state;
    let c_seconds = this.convertToSeconds(hours, minutes, seconds);

    if(c_seconds) {

      // seconds change
      seconds ? this.setState({seconds: seconds-1}) : this.setState({seconds: 59});

      // minutes change
      if(c_seconds % 60 === 0 && minutes) {
        this.setState({minutes: minutes -1});
      }

      // when only hours entered
      if(!minutes && hours) {
        this.setState({minutes: 59});
      }

      // hours change
      if(c_seconds % 3600 === 0 && hours) {
        this.setState({hours: hours-1});
      }

    } else {
      clearInterval(this.timer);
    }
  }


  stopTimer = () => {
    clearInterval(this.timer);
  }

  resetTimer = () => {
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });
    this.hoursInput.current.value = "00";
    this.minutesInput.current.value = "00";
    this.secondsInput.current.value = "00";
  }


  render() {
    const { hours, minutes, seconds } = this.state;

   const inphr = document.getElementById("inphr");
    const inpmin = document.getElementById("inpmin");
    const btnInsert = document.getElementById("btnInsert");
    const lsOutput = document.getElementById("lsOutput");



    window.onload = function(){
    btnInsert.onclick = () => {
      const key = inphr.value;
      const value = inpmin.value;
   
      if (key && value) {
          localStorage.setItem(key, value);
          window.localStorage.reload();
      }
    };

    for (let i = 0; i < localStorage.length; i++ ){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        lsOutput.HTML += `${key}: ${value}<br />`;
    }
  }

    return (
      <div className="App">
         <div className="inputGroup" onChange={this.timerSubmit}>
             
            <input id="inphr" className="timerinput" ref={this.hoursInput} type="text" placeholder={"00"}  name="hours"  onChange={this.inputHandler} /><span className="colan">:</span>
           
            <input id="inpmin" className="timerinput" ref={this.minutesInput} type="text"  placeholder={"00"}   name="minutes"  onChange={this.inputHandler} /><span className="colan">:</span>
            
            <input id="inpsec" className="timerinput"  ref={this.secondsInput} type="text"  placeholder={"00"}  name="seconds"  onChange={this.inputHandler} />
         </div>
         <div className="timerbtn" onChange={this.getData}>
            <FontAwesomeIcon  onClick={this.startTimer} className="start" icon={ faPlayCircle }/>
            <FontAwesomeIcon onClick={this.stopTimer}  className="stop" icon={ faPauseCircle }/>
            <FontAwesomeIcon onClick={this.resetTimer}  className="reset" icon={ faUndoAlt }/> 
         </div>
         <h1 className="timercd" > {hours}:{minutes}:{seconds} </h1>

          <button  id="btnInsert">submit</button>
            <label ref={this.hoursInput} id="labelhrs">
              
            </label>
                 

            <fieldset>
              <legend>
                Timer
              </legend>
              <div id="lsOutput">

              </div>
              </fieldset>     
      </div>
      

        
    );
  }
}

  export default Timer;



