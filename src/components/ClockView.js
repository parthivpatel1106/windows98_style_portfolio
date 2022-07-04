import { useEffect, useState } from "react";

function ClockView(){
    const date=new Date();
    let hours=date.getHours();
    let min=date.getMinutes();
    hours=(hours>12)?hours-12:hours
    hours=(hours<10)?"0"+hours:hours
    let time=(hours<12)?"PM":"PM"
    min=(min<10)?"0"+min:min
    let sec=date.getSeconds();
    const[second,setSec]=useState(sec)
    useEffect(() => {
        const interval = setInterval(() => {
             let newSec = new Date().getSeconds();
             newSec=(newSec<10)?"0"+newSec : newSec
             setSec(newSec);
        }, 1000)
    
        return () => {
            clearInterval(interval);
        }
    }, [second])
    
    return(
        <div className="dt-clock-view">
            <div className="dt-clock-hrs clock-time">{hours}</div>
            <p>:</p>
            <div className="dt-clock-mins clock-time">{min}</div>
            <p>:</p>
            <div className="dt-clock-sec clock-time">{second}
            </div>
            <div className="clock-time">{time}</div>
        </div>
    )
}
export default ClockView