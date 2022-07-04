import React from "react";
import { AppFrame } from "./AppFrame";
import "../style/Notepad.css"
import notepadIcon from "../images/apps/notepadicon.png"
export const Notepad = (props) => {
  return (
    <AppFrame popClose={props.popClose} titlename={`${props.filename || "General"} - Notepad`} icon={notepadIcon}>
      <div className="notepad">
        <textarea className="np-textarea" defaultValue={props.readme}></textarea>
      </div>
    </AppFrame>
  );
};
