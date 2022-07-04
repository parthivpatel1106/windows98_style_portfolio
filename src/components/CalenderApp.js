import { useState } from "react"
import CalendarView from "./CalendarView";
import ClockView from "./ClockView";
// import CalendarView from "./CalendarView";
// import Calendar from "./Calendar";
import mapImg from "../images/clock/world_clock.png"

function CalenderApp(props)
{
    const[toggleState,setToggleState]=useState(1);
    const toggleTab=(index)=>{
        setToggleState(index)
    }
    const getActiveTab=(index,className)=>toggleState===index?className:""
    return(
     <div className="date-time-properties">
        <div className="dt-title-bar">
            <p className="dt-title">Date/Time Properties</p>
            <button onClick={()=>props.setTrigger(false)} className="dt-close-btn">
                X
            </button>
        </div>
            <div className="dt-container">
                <ul className="dt-tab-list">
                    <li className={`dt-tab-1 ${getActiveTab(1,"active-tab-1")}`}  onClick={()=>toggleTab(1)}>Date & Time</li>
                    <li className={`dt-tab-2 ${getActiveTab(2,"active-tab-2")}`} onClick={()=>toggleTab(2)}>Time Zone</li>
                </ul>
                <div className="dt-container-content">
                    <div className={`dt-content-1 ${getActiveTab(1,"active-content")}`}>
                        <fieldset className="dt-date-content">
                            <legend className="dt-content-title">Date
                            </legend>
                            <CalendarView/>
                        </fieldset>
                        <fieldset className="dt-time-content">
                        <legend className="dt-content-title">Time</legend>
                        <ClockView/>
                        </fieldset>
                    </div>
                    <div className={`dt-content-2 ${getActiveTab(2,"active-content")}`}>
                        <div className="dt-world-clock">
                            <div className="dt-wc-selector">
                                <select disabled className="dt-wc-select">
                                    <option>( UTC + 5 : 30 ) India Standard Time (IST)</option>
                                </select>
                            </div>
                            <div className="dt-wc-map">
                                <div className="dt-map-frame">
                                    <img className="dt-wc" src={mapImg}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dt-container-btn">
                    <button disabled className="dt-btn dt-cancel">OK</button>
                    <button onClick={()=>props.setTrigger(false)} className="dt-btn dt-ok">Cancel</button>
            </div>
     </div>           
    )   
    
}
export default CalenderApp