import React from 'react'
import "../style/MinimizeApps.css"
export const MinimizeApps = (props) => {
  return (
    <div className='minimize-apps'>
        {props.children}
    </div>
  )
}
