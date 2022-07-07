import React from 'react'
import { MyComputer } from './MyComputer'
import "../style/MyComputer.css"

export const MyComputerWindow = (props) => {
  return (
    <div className='mycomputer'>
        <MyComputer popClose={props.popClose}/>
    </div>
  )
}
