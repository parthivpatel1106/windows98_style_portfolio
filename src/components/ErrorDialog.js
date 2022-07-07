import React from 'react'
import closeIcon from "../images/buttons/close_icon.png"
import "../style/ErrorDialog.css"
import errorIcon from"../images/apps/erroricon.png"
export const ErrorDialog = (props) => {
  return (
    <div className='error'>
        <div className='error-header'>
            <p className='error-name'>Windows Error</p>
            <button onClick={props.popClose} className="tb-btn tb-close"><img className="tb-btn-icon" src={closeIcon}/>
            </button>
        </div>
        <div className="error-body">
          <img src={errorIcon}/>
          <p className='error-detail'>This is restricted area you can't access this</p>
        </div>
    </div>
  )
}
