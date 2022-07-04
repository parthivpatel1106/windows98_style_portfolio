import internetExplorer from "../images/explorer/internetExplorer.png"
import mailLogo from "../images/explorer/mail.png"
import { MinimizeApp } from "./MinimizeApp"
import { MinimizeApps } from "./MinimizeApps"
function TaskbarApps(props){
    return(
        <div className="taskbar-apps">
            <a href="#"><img src={internetExplorer} className="explorer-logo"></img></a>
            <a href="#"><img src={mailLogo} className="mail-logo"></img></a>
            <div style={{borderLeft:"2px solid #888888" ,height:"45px"}}></div>
            {/* <MinimizeApps>
                
            </MinimizeApps> */}
            {props.children}
        </div>
    )
}

export default TaskbarApps