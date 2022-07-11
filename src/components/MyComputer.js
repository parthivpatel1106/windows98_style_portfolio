import React from "react";
import { AppFrame } from "./AppFrame";

import floppydriveimg from "../images/mycomputer/floppydrive_icon.png";
import foldericon from "../images/mycomputer/folder_icon.png";
import imageDirIcon from "../images/mycomputer/imagediricon.png";
import pdfIcon from "../images/apps/pdffileicon.png";
import computerIcon from "../images/apps/computericon.png";
import "../style/MyComputer.css";
import { Desktop } from "./Desktop";
import { DesktopApps } from "./DesktopApps";
import PopoverView from "./PopoverView";
import { useState } from 'react'
import { ReadmeNote } from './ReadmeNote'
import { MyDocuments } from "./MyDocuments";
import { ErrorDialog } from "./ErrorDialog";
import { FilesView } from "./FilesView";
import {MyComputerHome} from "./MyComputerHome"
import { PdfViewer } from "./PdfViewer";
import parthivAboutMe from "../files/parthivAboutMe.pdf"
export const MyComputer = (props) => {
  const[btnPopover,setBtnPopover]=useState(false)

  const setPop=()=>{
      // console.log("work")
      if(btnPopover===false)
      {
        setBtnPopover(true)
      }
      else{
        setBtnPopover(false)
      }
    }
    let fileView={
      view:false,
      filepath:""
    }
    const[filePopover,setFilePopover]=useState(fileView)
    const setView=()=>{
      // console.log("work")
      if(filePopover.view===false)
      {
        fileView={
          view:true,
          filepath:"/My Documents"
        }
        setFilePopover(fileView)
      }
      else if(filePopover.view===true){
        fileView={
          view:false,
          filepath:""
        }
        setFilePopover(fileView)
      }
    }
    const back=(filePopover.view===true)?setView:undefined

    const[pdf,setPdf]=useState(false)
     const popPdfView=()=>{
      if(pdf===false)
      {
        setPdf(true)
      }
      else
      {
        setPdf(false)
      }
    }
    const[pdf1,setPdf1]=useState(false)
     const popPdfView1=()=>{
      if(pdf1===false)
      {
        setPdf1(true)
      }
      else
      {
        setPdf1(false)
      }
    }
  return (
    <>
    <AppFrame
      popClose={props.popClose}
      titlename={"My Computer"}
      icon={computerIcon}
    >
      <MyComputerHome back={back} nextPath={filePopover.filepath}>
          <FilesView>
            <DesktopApps popBtn={setPop} appIcon={floppydriveimg} appName={"Local Disk (C:)"} />
            <PopoverView trigger={btnPopover} menuclass={"subset-view"}>
              <ErrorDialog popClose={setPop}/>
            </PopoverView>
            {/* <DesktopApps popBtn={setPop} appIcon={floppydriveimg} appName={"Local Disk (D:)"} />
            <DesktopApps popBtn={setPop} appIcon={floppydriveimg} appName={"Local Disk (E:)"} /> */}
            <DesktopApps popBtn={setView} appIcon={foldericon} appName={"My Documents"} />
            <DesktopApps appIcon={imageDirIcon} appName={"Images"} popBtn={setView}  />
            <PopoverView trigger={filePopover.view} menuclass={"subset-view"}>
              <FilesView>
                <DesktopApps popBtn={popPdfView} appIcon={pdfIcon} appName={"Parthiv .pdf"}/>
                <DesktopApps popBtn={popPdfView1} appIcon={pdfIcon} appName={"Resume .pdf"}/>
              </FilesView>
            </PopoverView>
        </FilesView>
      </MyComputerHome>
    </AppFrame>
    <PopoverView trigger={pdf} menuclass={"subset-view"}>
      <PdfViewer location={parthivAboutMe} popClose={popPdfView}/>
    </PopoverView>
    <PopoverView trigger={pdf1} menuclass={"subset-view"}>
      <PdfViewer popClose={popPdfView1}/>
    </PopoverView>
    </>
  );
};
