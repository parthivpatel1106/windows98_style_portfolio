import React from 'react'
import "../style/DesktopApp.css"
export const DesktopApps = (props) => {
  
  return (
    <button onDoubleClick={props.popBtn} className="desktop-app">
        <img className='dt-app-icon' src={props.appIcon}/>
        <p className='dt-app-name'>{props.appName}</p>
    </button>
  )
}
