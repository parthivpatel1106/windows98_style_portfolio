import React from 'react'

export const Console = () => {
    const access=()=>{
        let iframe = document.getElementById("ifr");
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        console.log(innerDoc.body);
    }
   return (
    <div>
        <iframe id="ifr" style={{width:"500px", height:"500px"}} src='https://bellard.org/jslinux/vm.html?url=freedos.cfg&mem=64&graphic=1' onLoad={access}></iframe>
    </div>
  )
}
