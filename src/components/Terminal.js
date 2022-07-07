import React from 'react'
import { AppFrame } from './AppFrame'
import "../style/Terminal.css"
import msdosIcon from "../images/apps/msdosicon.png"
export const Terminal = (props) => {
    const  slash="\\"
    const terminalText=`Microsoft (R) Windows'98 ${"\n"}${"\n"}(C) Copyright 1985-2000 Microsoft Corp.${"\n"}${"\n"} C:${slash} >`
  return (
    <div className='terminal'>      
        <AppFrame titlename={"Windows - Terminal"} icon={msdosIcon} popClose={props.popClose}>
            <div className='terminal-view'>
                <textarea className='tv-textarea' defaultValue={terminalText}>
                </textarea>
            </div>
        </AppFrame> 
    </div>
  )
}
