import React, { useState } from 'react'
import { AppFrame } from './AppFrame'
import "../style/InternetExplorer.css"
import { FilesView } from './FilesView'
import { MyComputerHome } from './MyComputerHome'
import nextBtn from "../images/buttons/forward_btn.png";
import backBtn from "../images/buttons/backward_btn.png";
import errorIcon from "../images/buttons/erroricon.png"
import netPingIcon from "../images/buttons/netpingicon.png"
import homePageIcon from "../images/buttons/homepageicon.png"
import webSearchIcon from "../images/buttons/websearchicon.png"
import googleLogo from "../images/apps/googlelogo.png"
import netUnavailableIcon from "../images/apps/netunavailableicon.png"
import explorerIcon from "../images/apps/explorericon.png"
import historyIcon from "../images/buttons/historyicon.png"
export const InternetExplorer = (props) => {
    let webItems={
        initview:true,
        image:googleLogo,
        styles:"",
        error:"",
        path:"https://www.google.com/"
    }
    const[search,setSearch]=useState(webItems)
    const viewSearch=()=>{
        if(search.initview===true)
        {
            setSearch({
                initview:false,
                image:netUnavailableIcon,
                styles:"none",
                error:`Service Unavailable${"\n"}Contact Admin`,
                path:"https://www.google.com/unavailable"
        })
        }
        else
        {
            setSearch({
                initview:true,
                image:googleLogo,
                styles:"",
                error:"",
                path:"https://www.google.com/"
            })
        }
    }
    const back=(search.initview===false)?viewSearch:undefined
  return (
    <div className='explorer'>
        <AppFrame titlename={"Internet Explorer"} icon={explorerIcon} popClose={props.popClose}>
           <div className='explorer-frame'>
            <div className='exp-tools'>
            <button onClick={back} className="mc-tb-btn">
              <img src={backBtn} />
            </button>
            <button className="mc-tb-btn">
              <img src={nextBtn} />
            </button>
            <div
              style={{ borderLeft: "2px solid #888888", height: "20px" }}
            ></div>
            <button className="mc-tb-btn">
              <img src={errorIcon} />
            </button>
            <button className="mc-tb-btn">
              <img src={netPingIcon} />
            </button>
            <div
              style={{ borderLeft: "2px solid #888888", height: "20px" }}
            ></div>
            <button className="mc-tb-btn">
              <img src={homePageIcon} />
            </button>
            <button className="mc-tb-btn">
              <img src={webSearchIcon} />
            </button>
            <button className="mc-tb-btn">
              <img src={historyIcon} />
            </button>
            </div>
            <div className='exp-searchbar'>
                <p className='exp-searchbar-name'>Address</p>
                <input type={"text"} className="exp-search" value={search.path}/>
                <button className="es-btn">
                    Search
                </button>
            </div>
            <div className='exp-main'>
                <img className="google-logo" src={search.image}/>
                <input style={{display:search.styles}} className='google-searchbar' required/>
                <div style={{display:search.styles}} className='google-btns'>
                    <button onClick={viewSearch} className="es-btn">
                        Google Search
                    </button>
                    <button className="es-btn" onClick={viewSearch}>
                        I'm Feeling lucky
                    </button>
                </div>
                <pre className='google-error'>{search.error}</pre>
            </div>
           </div>
        </AppFrame>
    </div>
  )
}
