import React, { useState } from 'react'
import { AppFrame } from './AppFrame'
import "../style/Terminal.css"
import msdosIcon from "../images/apps/msdosicon.png"
export const Terminal = (props) => {
    const [command,setCommand]=useState("")
    const[commandOutput,setCommandOp]=useState("")
    let lsCommandOp=`/My Computer${"\n"}/User${"\n"}/Logs${"\n"}/Program Files${"\n"}/Program Files(x86)`
    let helpCommand=` echo: echo <TEXT> will print text${"\n"} ls: this command will list directories`
    let hackedText=`  
     _    _               _____   _  __
    | |  | |     /\\      / ____| | |/ /
    | |__| |    /  \\    | |      | ' / 
    |  __  |   / /\\ \\   | |      |  <  
    | |  | |  / ____ \\  | |____  | . \\ 
    |_|  |_| /_/    \\_\\  \\_____| |_|\\_\\
                                       
    
    `  
    const userCommand=event=>{
      if(event.key==="Enter")
      {
        let str=event.target.value
        var strArr=str.split(" ")
        // console.log(strArr[0]);
        setCommand(event.target.value)
        if(event.target.value==="ls")
        {
          setCommandOp(lsCommandOp)
        }
        else if(strArr[0]==="echo")
        {
          let ans=""
          for(let i=1;i<strArr.length;i++)
          {
            ans+=strArr[i]+" "
          }
          // console.log(ans)
          setCommandOp(ans)
        }
        else if(str==="help")
        {
          setCommandOp(<pre>{helpCommand}</pre>)
        }
        else if(str==="hack")
        {
          setCommandOp(<pre>{hackedText}</pre>)
        }
      }
    }
    // const enterEvent=ev=>{
    //   if(ev.key="")
    // }
  return (
    <div className='terminal'>      
        <AppFrame titlename={"Windows - Terminal"} icon={msdosIcon} popClose={props.popClose}>
            <div className='terminal-view'>
                <div className='tv-text' style={{color:"green",fontSize:"12px"}}>Microsoft (R) Windows'98 
                <br/>
                (C) Copyright 1985-2000 Microsoft
                crosoft Corp. 
                <br/>
                <br/>
                C:/windows/parthiv {'>'} <input type={"text"} className='tv-textarea' rows={1} name="command" defaultValue={command} onKeyPress={userCommand}/>
                <br/>
                <pre>type help to know more</pre>
                <pre style={{"fontFamily":"Pixel Sans Serif Regular",fontSize:"10px"}}>{commandOutput}</pre>
                </div>
            </div>
        </AppFrame> 
    </div>
  )
}
