
import CalenderApp from './CalenderApp';
import { click } from '@testing-library/user-event/dist/click';
import { useEffect, useState } from 'react';
function ClockApp(props){
    let date=new Date();
    let h=date.getHours();
    let m=date.getMinutes();
    m=(m<10)?"0"+m : m;
    const[min,setMin]=useState(m)
    if(h>12)
    {
        h=h-12
    }
    h=(h<10)?"0"+h : h;
    useEffect(()=>{
        const interval=setInterval(()=>{
            let newMin=new Date().getMinutes();
            newMin=(newMin<10)?"0"+newMin:newMin
            setMin(newMin)  
        },1000)
        return()=>{
            clearInterval(interval)
        }
    },[min])
    let dayTime=(h>12)?"AM" : "PM"
    return(
       
            <p className="clock-display">
                {h+":"+min} {dayTime}
            </p>

    )
}

export default ClockApp;