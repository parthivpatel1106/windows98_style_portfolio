import { useState } from "react";
import internetExplorer from "../images/explorer/internetExplorer.png";
import mailLogo from "../images/explorer/mail.png";
import { InternetExplorer } from "./InternetExplorer";
import { MinimizeApp } from "./MinimizeApp";
import { MinimizeApps } from "./MinimizeApps";
import PopoverView from "./PopoverView";
import { Terminal } from "./Terminal";
import TaskManagerIcon from "../images/apps/taskmanagericon.png"
function TaskbarApps(props) {
    const[internet,setInternet]=useState(false)
    const viewInternet=()=>{
        if(internet===false)
        {
            setInternet(true)
        }
        else
        {
            setInternet(false)
        }
    }

  return (
    <>
    <div className="taskbar-apps">
      <button className="tba-btn" onClick={props.explorer} >
        <img src={internetExplorer} className="explorer-logo"></img>
      </button>
      <button className="tba-btn" onClick={props.academics} >
        <img style={{height:"25px"}} src={TaskManagerIcon} ></img>
      </button>
      <a href="#">
        <img src={mailLogo} className="mail-logo"></img>
      </a>
      <div style={{ borderLeft: "2px solid #888888", height: "45px" }}></div>
      {/* <MinimizeApps>
                
            </MinimizeApps> */}
      {props.children}
    </div>
    {/* <PopoverView trigger={internet} menuclass={"subset-view"}>
        <InternetExplorer popClose={viewInternet}/>
    </PopoverView> */}
    </>
  );
}

export default TaskbarApps;
