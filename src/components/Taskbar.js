import StartBtn from "./StartBtn";
import TaskbarApps from "./TaskbarApps"
import DateAndTime from "./DateAndTime";
import PopoverView from "./PopoverView";
import { useState } from "react";
import { InternetExplorer } from "./InternetExplorer";
import { TaskManager } from "./TaskManager";
function Taskbar(props){
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
    const[taskManager,setTaskManager]=useState(false)
  const viewTaskManager=()=>{
    if(taskManager===true)
    {
      setTaskManager(false)
    }
    else{
      setTaskManager(true)
    }
  }
    return(
        <>
        <div className="taskbar">
            <div className="contents">
                <div className="left-content">
                    <StartBtn/>
                    <TaskbarApps explorer={viewInternet} academics={viewTaskManager}/>
                </div>
                <div className="right-content">
                    <DateAndTime/>
                </div>
            </div>
        </div>
        <PopoverView trigger={internet} menuclass={"subset-view"}>
            <InternetExplorer popClose={viewInternet}/>
        </PopoverView>
        <PopoverView trigger={taskManager} menuclass={"subset-view"}>
            <TaskManager popClose={viewTaskManager}/>
        </PopoverView>
        </>
    )
}

export default Taskbar;