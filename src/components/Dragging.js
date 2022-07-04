import { Component } from 'react'
import React, { useState } from 'react'
import "../style/Dragging.css"

export const Dragging = (props) => {
    const initState={
        initX:0,
        initY:0,
        dragWork:false,
        styles:{}
    }
    const [drag, setDrag] = useState(initState)
    const dragOn=(e)=>{
        
        setDrag({
            initX:e.screenX-e.currentTarget.getBoundingClientRect().left,
            initY:e.screenY-e.currentTarget.getBoundingClientRect().top,
            dragWork:true
        })
        console.log(drag.initX)
    }
    const dragStart=(e)=>{
        if(drag.dragWork){
            var leftPos=e.screenX-drag.initX;
            var topPos=e.screenY-drag.initY;
            setDrag({
                styles:{
                    left:leftPos,
                    top:topPos
                }
            })
            console.log(leftPos);
        }

    }
    const dragOff=()=>{
        setDrag({
            dragWork:false
        })
    }
    return (
    <div className="drag-component" style={drag.styles} onMouseDown={dragOn} onMouseMove={dragStart} onMouseUp={dragOff}>
            <div className='dialogbox'>
                {/* Contents of the Dialog: 
                    - one
                    - two
                    - three  */}
            </div>
    </div>  
  )
}

// export default class Dragging extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             diffX: 0,
//             diffY: 0,
//             dragging: false,
//             styles: {}
//         }

//         this._dragStart = this._dragStart.bind(this);
//         this._dragging = this._dragging.bind(this);
//         this._dragEnd = this._dragEnd.bind(this);
//     }

//     _dragStart(e) {
//         this.setState({
//             diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
//             diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
//             dragging: true
//         });
//     }

//     _dragging(e) {

//         if(this.state.dragging) {
//             var left = e.screenX - this.state.diffX;
//             var top = e.screenY - this.state.diffY;
    
//             this.setState({
//                 styles: {
//                     left: left,
//                     top: top
//                 }
//             });
//         }
//     }    

//     _dragEnd() {
//         this.setState({
//             dragging: false
//         });
//     }

//     render() {
//         // var classes = this.props.show ? 'Dialog' : 'Dialog hidden';
//         return (
//             <div className="drag-component" style={this.state.styles} onMouseDown={this._dragStart} onMouseMove={this._dragging} onMouseUp={this._dragEnd}>
//                 <div className='DialogTitle'>My Dialog</div>
//                 <div className='Contents'>
//                     Contents of the Dialog: 
//                         - one
//                         - two
//                         - three 
//                 </div>
//                 <div className='closeButton' onClick={this.props.onClose}>
//                     Close
//                 </div>
//             </div>
//         );
//     }
// }

