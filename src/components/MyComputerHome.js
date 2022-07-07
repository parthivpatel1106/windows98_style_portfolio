import React from 'react'
import backBtn from "../images/buttons/backward_btn.png";
import nextBtn from "../images/buttons/forward_btn.png";
import folderBtn from "../images/buttons/folder_btn.png";
import renameBtn from "../images/buttons/rename_btn.png";
import mycompimg from "../images/mycomputer/my_computer_img.png";
export const MyComputerHome = (props) => {
  return (
    <div className="my-computer">
        <div className="mc-task-bar">
          <div className="mc-tb-button">
            <button onClick={props.back} className="mc-tb-btn">
              <img src={backBtn} />
            </button>
            <button className="mc-tb-btn">
              <img src={nextBtn} />
            </button>
            <button className="mc-tb-btn">
              <img src={folderBtn} />
            </button>
            <button className="mc-tb-btn">
              <img src={renameBtn} />
            </button>
            <div
              style={{ borderLeft: "2px solid #888888", height: "40px" }}
            ></div>
            <button className="mc-tb-btn" disabled>
              <p>CUT</p>
            </button>
            <button className="mc-tb-btn" disabled>
              <p>COPY</p>
            </button>
            <button className="mc-tb-btn" disabled>
              <p>PASTE</p>
            </button>
            <div
              style={{ borderLeft: "2px solid #888888", height: "40px" }}
            ></div>
            <button className="mc-tb-btn" disabled>
              <p>UNDO</p>
            </button>
            <div
              style={{ borderLeft: "2px solid #888888", height: "40px" }}
            ></div>
            <button className="mc-tb-btn" disabled>
              <p>DELETE</p>
            </button>
          </div>
        </div>
        <div className="mc-address-bar">
          <div className="mc-ab-name">Address</div>
          <input
            className="mc-ab-path"
            type="text"
            value={`/My Computer`+`${props.nextPath}`}
            disabled
          ></input>
        </div>
        <div className="files-view">
          <div className="fv-left">
            <img className="my-comp-img" src={mycompimg} />
          </div>
          {props.children}
          </div>
        </div>
  )
}
