import ClockApp from "./ClockApp"
import calenderLogo from '../images/calender/calenderLogo.png'
import PopoverView from "./PopoverView";
import CalenderApp from "./CalenderApp";
import { useState } from "react";

function DateAndTime(props){
  const[btnPopover,setBtnPopover]=useState(false);
  const setToggle=()=>{
    if(btnPopover===true)
    {
      setBtnPopover(false)
    }
    else{
      setBtnPopover(true)
    }
  }
    return(
        <div className="date-time-widget">
            <div className="clock-widget">
            <button className='cal-btn' onClick={setToggle}>
                <img className='calender-logo' src= {calenderLogo}>
                </img>
            </button>
            <ClockApp/>
            <PopoverView trigger={btnPopover} menuclass={"dt-widget-position"}>
              {/* <h1>hello</h1> */}
              <CalenderApp setTrigger={setBtnPopover}/>
            </PopoverView>
        </div>
        </div>
    ) 
}

export default DateAndTime;