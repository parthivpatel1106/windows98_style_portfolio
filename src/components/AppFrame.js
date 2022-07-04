import React, { useState } from "react";
import "../style/AppFrame.css";
import shutdownIcon from "../images/menubar/shut_down_cool_4.png";
import minIcon from "../images/buttons/minimize_icon.png"
import closeIcon from "../images/buttons/close_icon.png"
import maxIcon from "../images/buttons/maximize_icon.png"

export const AppFrame = (props) => {
  const [size, setSize] = useState("normal-view");
  const max = () => {
    if(size==="normal-view")
    {
        setSize("maximize-view");
    }
    else{
        setSize("normal-view");
    }
  };
  return (
    <div className={`${size}`}>
      <div className="titlebar">
        <div className="tb-name">
            <img className="tb-icon" src={props.icon || shutdownIcon}/>
            <p>{props.titlename || "testing"}</p>
        </div>
        <div className="tb-button">
            <button className="tb-btn tb-min"><img className="tb-btn-icon" src={minIcon}/></button>
            <button className="tb-btn tb-max" onClick={max}><img className="tb-btn-icon" src={maxIcon}/></button>
            <button onClick={props.popClose} className="tb-btn tb-close"><img className="tb-btn-icon" src={closeIcon}/></button>
        </div>
      </div>
      <div className="app-taskbar">
        <a className="app-task" href="">View</a>
        <a className="app-task" href="">Edit</a>
        <a className="app-task" href="">Help</a>
      </div>
      <div className="frame-content">
        {props.children}
      </div>
    </div>
  );
};
