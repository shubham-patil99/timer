import React from "react"
import "./style.css"
import { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';


class AlarmClock extends Component {
  data; 
    constructor(props) {
      super(props);
      this.dataHandler = this.dataHandler.bind(this);
      this.getData = this.getData.bind(this); 
      this.state = {
        currentTime: '',
        alarmTime: ''
      };
      this.setAlarmTime = this.setAlarmTime.bind(this);
    }


    componentMount() {
      this.data = JSON.parse(localStorage.getItem('Alarm'));
   
      if (localStorage.getItem('Alarm')) {
          this.setState({
            currentTime: this.data.currentTime,
            alarmTime: this.data.alarmTime
      })
  } else {
      this.setState({
        currentTime: '',
        alarmTime: ''
      })
  }
  }

  
  
    componentDidMount(){
      this.clock = setInterval(
        () => this.setCurrentTime(),
        1000
      )
      this.interval = setInterval(
        () => this.checkAlarmClock(),
      1000)
      
    }

   
    componentWillUnmount(){
      clearInterval(this.clock);
      clearInterval(this.interval);
    }

    setCurrentTime(){
      this.setState({
        currentTime: new Date().toLocaleTimeString('en-US', { hour12: false })
      });
    }
  
    setAlarmTime = (e) => {
      e.preventDefault();
      const inputAlarmTimeModified = e.target.value + ':00'
      this.setState({
        alarmTime: inputAlarmTimeModified
      })
    }

    dataHandler(e) {
      e.preventDefault()
     localStorage.setItem('Alarm',JSON.stringify(this.state));
  }

  getData(e)  {
    e.preventDefault()
    localStorage.getItem('Alarm',JSON.parse(this.state));
  }
 
    checkAlarmClock(){
      if(this.state.alarmTime == 'undefined' || !this.state.alarmTime) {
        this.alarmMessage = "";
      } else {
        this.alarmMessage = "Alarm is Set For " + this.state.alarmTime + ".";
        if(this.state.currentTime === this.state.alarmTime) {
          alert("its time!");
        } else {
          console.log("not yet");
        }
      }   
    }

    render() {


      return (
        <div className="alarm">

          <div className="time">
            {this.state.currentTime}
          </div>

          <div className="alarmsg">
            {this.alarmMessage}
          </div>

          <form onChange={this.dataHandler} >
            <input id="inpvalue" className="alarminput" onChange={this.setAlarmTime} type="time" />
            <button type="button" onChange={this.getData} id="btnInsert"> <FontAwesomeIcon  className="bell" icon={ faBell } /></button>

          </form>

          <fieldset>
              <legend>History</legend>
                  <div id="lsOutput"></div>
          </fieldset>
     </div>
      );
    }
  }

  export default AlarmClock


