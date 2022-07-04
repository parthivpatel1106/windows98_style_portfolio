import { useState } from "react";

function PopoverView(props){
    const[currState,setCurrState]=useState(0)
    const toggleState=(index)=>{
        setCurrState(index)
    }
    // const getActiveDiv=(index,className)=>currState===index?className:""
    console.log(props.menuclass);
    return(props.trigger)?(
        <div className={`popover ${props.menuclass}`} onClick={()=>toggleState(props.state)}>
            <div className="popover-inner">
                {props.children}
            </div>
        </div>
    ):"";
}

export default PopoverView;