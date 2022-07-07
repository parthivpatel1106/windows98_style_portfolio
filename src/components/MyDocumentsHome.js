import React from 'react'
import { DesktopApps } from './DesktopApps'
import foldericon from "../images/mycomputer/folder_icon.png";
export const MyDocumentsHome = (props) => {
  return (
    <DesktopApps class={props.class} appIcon={foldericon} appName={"My Documents"} />
  )
}
