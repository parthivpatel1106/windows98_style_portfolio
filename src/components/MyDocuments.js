import React,{useState} from 'react'
import { DesktopApps } from './DesktopApps'
import PopoverView from './PopoverView'
import { ReadmeNote } from './ReadmeNote'
import foldericon from "../images/mycomputer/folder_icon.png";
export const MyDocuments = () => {
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
    <>
    <DesktopApps popBtn={setPop} appIcon={foldericon} appName={"My Documents"} />
    <PopoverView popBtn={setPop} trigger={btnPopover} menuclass={"set-view"}>
        <ReadmeNote setTrigger={setBtnPopover} popClose={setPop} />
    </PopoverView>
    </>
  )
}
