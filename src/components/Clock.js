import  React from "react"
import "./style.css"
import Timer from "../components/Timer"
import Stopwatch from "../components/Stopwatch"
import AlarmClock from "../components/Alarm"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faHourglassEnd } from '@fortawesome/free-solid-svg-icons';
import { faStopwatch } from '@fortawesome/free-solid-svg-icons';

const Clock = () =>
(


<div className="container">



<ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Timer  <FontAwesomeIcon className="mainicon" icon={ faHourglassEnd } /></button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Stopwatch <FontAwesomeIcon className="mainicon" icon={ faStopwatch } /></button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Alarm <FontAwesomeIcon className="mainicon" icon={ faBell } /></button>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"><Timer /></div>
  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"><Stopwatch /></div>
  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"><AlarmClock /></div>
</div>

</div>





)

export default Clock

/*

<div class="row align-items-start">

<div className="col-4">
  <Timer />
</div>

<div className="col-4">
  <Stopwatch />
</div>

<div className="col-4" id='alarm-clock'>
  <AlarmClock />
</div>
</div>
*/
