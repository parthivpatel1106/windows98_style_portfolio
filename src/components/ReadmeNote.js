import React from 'react'
import { Notepad } from './Notepad'
import "../style/ReadmeNote.css"

export const ReadmeNote = (props) => {
    const note=`------------------------------------------------------------------${"\n"}HELLO WORLD${"\n"}README for general information ${"\n"}This Feels like Retro ' 98 ${"\n"}------------------------------------------------------------------ ${"\n"}(c) Inspired from Windows 98 ${"\n"}${"\n"}This text file provides information about how to use this website ${"\n"}${"\n"}${"\n"}------------------------------------------------------------------${"\n"}I am Parthiv Patel, Author of this website${"\n"}------------------------------------------------------------------ ${"\n"}-: Navigation :- ${"\n"}  • This is basically simple replica of Windows'98.  ${"\n"}  • Here you will find three sections${"\n"}          - Desktop${"\n"}          - Taskbar${"\n"}          - File manager ${"\n"} ${"\n"}  • You can simply double tap on desktop icons and open that app ${"\n"}  • You can close and maximize apps by clicking close and maximize button      ${"\n"}  • You can view PDFs and images in file manager ${"\n"}  • You can interact with interface like normal windows ${"\n"}  • If you find any bugs or if you can help me to improve this website then please reach out to me at parthivpatel1106@gmail.com (Also you can find my contacts under start menu)`
    return (
    <div className='readme'>
        <Notepad popClose={props.popClose} readme={note}/>
    </div>
  )
}
