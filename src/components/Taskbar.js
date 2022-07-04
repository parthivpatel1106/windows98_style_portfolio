import StartBtn from "./StartBtn";
import TaskbarApps from "./TaskbarApps"
import DateAndTime from "./DateAndTime";
function Taskbar(){
    return(
        <div className="taskbar">
            <div className="contents">
                <div className="left-content">
                    <StartBtn/>
                    <TaskbarApps/>
                </div>
                <div className="right-content">
                    <DateAndTime/>
                </div>
            </div>
        </div>
    )
}

export default Taskbar;