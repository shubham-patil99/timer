import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';



 const ControlButtons=(props) =>
 {
  const StartButton = (
    <div className="btn btn-one btn-start"
         onClick={props.handleStart}>
     <FontAwesomeIcon className="start" icon={ faPlayCircle }/>
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two" 
           onClick={props.handleReset}>
        <FontAwesomeIcon className="reset" icon={ faUndoAlt }/>
      </div>
      <div className="btn btn-one" 
           onClick={props.handlePauseResume}>
        {props.isPaused ? <FontAwesomeIcon className="start" icon={ faPlayCircle }/> : <FontAwesomeIcon className="stop" icon={ faPauseCircle }/>}
      </div>
    </div>
  );
  
  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}


export default ControlButtons
