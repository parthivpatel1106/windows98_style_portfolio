import React, { useState } from 'react'
import { Desktop } from './Desktop'
import "../style/MainDesktop.css"
import thispcIcon from "../images/apps/computericon.png"
import notepadIcon from "../images/apps/notepadicon.png"
import consoleIcon from "../images/apps/consoleicon.png"
import { DesktopApps } from './DesktopApps'
import PopoverView from './PopoverView'
import { ReadmeNote } from './ReadmeNote'
import TaskbarApps from './TaskbarApps'
import { MinimizeApps } from './MinimizeApps'
import { MinimizeApp } from './MinimizeApp'
import { MyComputer } from './MyComputer'
import foldericon from "../images/mycomputer/folder_icon.png";
import { MyComputerWindow } from './MyComputerWindow'
import { MyDocuments } from './MyDocuments'
import { Terminal } from './Terminal'
export const MainDesktop = (props) => {
  const[btnPopover,setBtnPopover]=useState(false)
  const[btnPopoverMyComp,setBtnPopoverMyComp]=useState(false)
  const[btnPopoverTerminal,setBtnPopoverTerminal]=useState(false)

  const setPop=()=>{
    if(btnPopover===false)
    {
      setBtnPopover(true)
    }
    else{
      setBtnPopover(false)
    }
  }
  const setPopMyComp=()=>{
    if(btnPopoverMyComp===false)
    {
      setBtnPopoverMyComp(true)
    }
    else{
      setBtnPopoverMyComp(false)
    }
  }
  const setPopTerminal=()=>{
    if(btnPopoverTerminal===false)
    {
      setBtnPopoverTerminal(true)
    }
    else{
      setBtnPopoverTerminal(false)
    }
  }
  // console.log(PopoverView)
  return (
    <div className="main-desktop">
    <Desktop>
        <DesktopApps popBtn={setPopMyComp} appIcon={thispcIcon} appName={"My Computer"}/>
        <PopoverView trigger={btnPopoverMyComp} menuclass={"set-view"}>
          <MyComputerWindow setTrigger={setBtnPopoverMyComp} popClose={setPopMyComp}/>
        </PopoverView>
        <DesktopApps popBtn={setPop} appIcon={notepadIcon} appName={"Readme.txt"}/>
        <PopoverView trigger={btnPopover} menuclass={"set-view"}>
          <ReadmeNote setTrigger={setBtnPopover} popClose={setPop}/>
        </PopoverView>
        <DesktopApps appIcon={consoleIcon} appName={"Terminal"} popBtn={setPopTerminal}/>
        <PopoverView trigger={btnPopoverTerminal} menuclass={"set-view"}>
          <Terminal popClose={setPopTerminal}/>  
        </PopoverView>      
        </Desktop>
    </div>
  )
}
