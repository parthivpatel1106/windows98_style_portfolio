import React from 'react'
import "../style/MinimizeApps.css"
export const MinimizeApp = (props) => {
  return (
    <div className='minimize-app'>
        <button className='minimize-app-btn'>{props.appname ||"testing"}</button>
    </div>
  )
}
