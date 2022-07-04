import React from 'react'
import { Notepad } from './Notepad'
import "../style/ReadmeNote.css"

export const ReadmeNote = (props) => {
    const note=`------------------------------------------------------------------${"\n"}HELLO WORLD${"\n"}README for general information ${"\n"}This Feels like Retro ' 98 ${"\n"}------------------------------------------------------------------ ${"\n"}(c) Inspired from Windows 98 ${"\n"}${"\n"}This text file provides information about how to use this website ${"\n"}${"\n"}${"\n"}------------------------------------------------------------------ ${"\n"}-: Important Note :- ${"\n"}  • point 0 ${"\n"}  • point 1 ${"\n"}  • point 2 ${"\n"}  • point 3`
    return (
    <div className='readme'>
        <Notepad popClose={props.popClose} readme={note}/>
    </div>
  )
}
