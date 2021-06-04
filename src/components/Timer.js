import  React from "react"
import "./style.css"
import { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';

class Timer extends Component {
 userData;
  constructor(props) {
    
    super(props);
    this.timerSubmit = this.onSubmit.bind(this);
    this.inputHandler = this.inputHandler.bind(this);
    this.hoursInput = React.createRef();
    this.minutesInput= React.createRef();
    this.secondsInput = React.createRef();

    this.state = {
      hours: 0,
      minutes: 0,
      seconds:0,  
      time: 0,
    }
    
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  convertToSeconds = ( hours, minutes,seconds) => {
    return seconds + minutes * 60 + hours * 60 * 60;
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

  startTimer = () => {
    this.timer = setInterval(this.countDown, 1000);
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

  
 onSubmit = (e) => {
    e.preventDefault()
}

  componentDidMount() {
  this.UserData = JSON.parse(localStorage.getItem('timer'));

  if (localStorage.getItem('timer')) {
      this.setState({
          hours: this.hours,
         minutes: this.minutes,
         seconds: this.seconds
  })
} else {
  this.setState({
    hours: '',
    minutes: '',
    seconds: ''
  })
}
}

componentWillUpdate(nextProps, nextState){
  localStorage.setItem('timer', JSON.stringify(nextState));
}
  


  render() {
    const { hours, minutes, seconds } = this.state;
  

    return (
      <div className="App">
         <from className="inputGroup" onSubmit={this.onSubmit}>
             
            <input id="inphr" className="timerinput" ref={this.hoursInput} type="text" placeholder={"00"}  name="hours"  onChange={this.inputHandler} /><span className="colan">:</span>
           
            <input id="inpmin" className="timerinput" ref={this.minutesInput} type="text"  placeholder={"00"}   name="minutes"  onChange={this.inputHandler} /><span className="colan">:</span>
            
            <input id="inpsec" className="timerinput"  ref={this.secondsInput} type="text"  placeholder={"00"}  name="seconds"  onChange={this.inputHandler} /><br />
            <button type="submit" onSubmit={this.onSubmit} className="btn btn-primary btn-block"  id="btnInsert" >Save Timer </button>
         </from>
         <div className="timerbtn" >
            <FontAwesomeIcon  onClick={this.startTimer} className="start" icon={ faPlayCircle }/>
            <FontAwesomeIcon onClick={this.stopTimer}  className="stop" icon={ faPauseCircle }/>
            <FontAwesomeIcon onClick={this.resetTimer}  className="reset" icon={ faUndoAlt } />
         </div>
         <h1 className="timercd" > {hours}:{minutes}:{seconds} </h1>

          
                 

            <fieldset>
              <div  >
                <input className="lsOutput" value={hours} />
                <input className="lsOutput"  value={minutes} />
                <input className="lsOutput"  value={seconds} />

              </div>
              </fieldset>     
      </div>
      

        
    );
}
}
  export default Timer



