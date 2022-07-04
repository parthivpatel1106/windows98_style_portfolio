import { useState } from "react";
import startBtnLogo from "../images/startLogo/startBtnLogo.png"
import PopoverView from "./PopoverView";
import StartMenu from "./StartMenu";
function StartBtn(){
    const[btnPopover,setBtnPopover]=useState(false)
    // const getActiveDiv=(index,className)=>currState===index?className:""
    // const setState=(!false)?true:false
    // console.log(setState);
    const setState=()=>{
        if(btnPopover===true)
        {
            setBtnPopover(false)
        }
        else{
            setBtnPopover(true)
        }
    }
    return(
        <div className="start">
            <button className="start-btn" onClick={setState}>
                <img alt="startlogo" className="btn-logo" src={startBtnLogo}></img>
                Start
            </button>
            <PopoverView trigger={btnPopover} state={1} menuclass={"menu-popover"}>
                <StartMenu setTrigger={setBtnPopover}/>
            </PopoverView>
        </div>
    )
}
export default StartBtn; 