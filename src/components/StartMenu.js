import windowsUpdateIcon from "../images/menubar/windows_update_large.png";
import projectIcon from "../images/menubar/program_manager_1.png";
import academicsIcon from "../images/menubar/file_set_0.png";
import videoIcon from "../images/menubar/video_mk_4.png";
import downloadIcon from "../images/menubar/directory_net_web_4.png";
import contactIcon from "../images/menubar/modem_4.png";
import consoleIcon from "../images/menubar/console_prompt_0.png";
import shutdownIcon from "../images/menubar/shut_down_cool_4.png";
import linkdinIcon from "../images/menubar/Social/linkdinpixelated.png"
import githubIcon from "../images/menubar/Social/githubpixelated.png"
import hackerrankIcon from "../images/menubar/Social/hackerrankpixelated.png"

import "../style/StartMenu.css";
import MenuItem from "./MenuItem";
// import PopoverView from "./PopoverView";
import sscIcon from "../images/menubar/Academics/certificate_0.png"
import enggIcon from "../images/menubar/Academics/certificate_seal.png"
import { MenuList } from "./MenuList";
import { useState } from "react";
function StartMenu() {
  const shut=()=>{
    console.log("click")
    window.location="https://www.google.com"
  }
  
  return (
    <div className="menubar">
      <div className="mb-title-bg"></div>
      <div className="mb-title">Windows 98</div>
      <div className="mb-items">
        {/* <div className="mb-item-list"> */}
        <MenuList dropdown={false}>
          <MenuItem icon={windowsUpdateIcon} itemName={"Windows Update"} submenu={false}/>
          <hr className="mb-border"></hr>
          {/* <MenuItem icon={academicsIcon}  itemName={"Academics"} submenu={false}>
          </MenuItem> */}
          {/* <MenuItem icon={projectIcon} itemName={"Projects"} submenu={true}/>
          <MenuItem icon={videoIcon} itemName={"Videos"} submenu={true} /> */}
          <MenuItem icon={downloadIcon} itemName={"Downloads"} submenu={true} />
          <MenuItem icon={contactIcon} itemName={"Contact"} submenu={true}>
          <MenuList dropdown={true}>
          <a className="sociallinks" href="https://www.linkedin.com/in/parthiv-patel-1106/" target={"_blank"}>
            <MenuItem icon={linkdinIcon} itemName={"Linkdin"} submenu={false}/>
          </a>
          <a className="sociallinks" href="https://github.com/parthivpatel1106" target={"_blank"}>
            <MenuItem icon={githubIcon} itemName={"Github"} submenu={false} />
          </a>
          {/* <a href="" target={"_blank"}>
            <MenuItem icon={hackerrankIcon} itemName={"hackerrank"} submenu={false}/>
          </a> */}
          </MenuList>
          </MenuItem>
          <MenuItem icon={consoleIcon} itemName={"Console"} submenu={false} />
          <MenuItem icon={shutdownIcon} itemName={"Shut Down"} submenu={false} click={shut}/>
          </MenuList>
        {/* </div> */}
      </div>
    </div>
  );
}
export default StartMenu;
