import React, { useState } from 'react'
import { Desktop } from './Desktop'
import "../style/MainDesktop.css"
import thispcIcon from "../images/apps/computericon.png"
import notepadIcon from "../images/apps/notepadicon.png"
import { DesktopApps } from './DesktopApps'
import PopoverView from './PopoverView'
import { ReadmeNote } from './ReadmeNote'
import TaskbarApps from './TaskbarApps'
import { MinimizeApps } from './MinimizeApps'
import { MinimizeApp } from './MinimizeApp'
export const MainDesktop = (props) => {
  const[btnPopover,setBtnPopover]=useState(false)
  const setPop=()=>{
    if(btnPopover===false)
    {
      setBtnPopover(true)

    }
    else{
      setBtnPopover(false)
    }
  }
  return (
    <div className="main-desktop">
    <Desktop>
        <DesktopApps appIcon={thispcIcon} appName={"My Computer"}/>
        <DesktopApps popBtn={setPop} appIcon={notepadIcon} appName={"Readme.txt"}/>
        <PopoverView trigger={btnPopover} menuclass={"readme-note"}>
          <ReadmeNote setTrigger={setBtnPopover} popClose={setPop}/>
        </PopoverView>
      </Desktop>
      {props.children}
    </div>
  )
}
