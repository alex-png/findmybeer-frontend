import React from 'react'
import ModalCard from './ModalCard.js'

class Modal extends React.Component{
     blackBox = {
        background: "rgba(0,0,0,1)",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "2",
        opacity: 0.5
    }

    render(){ 
        return(
            <>
            <ModalCard firstTimeSwitch={this.props.firstTimeSwitch} />
            <div style={this.blackBox}>
            </div>
            </>
        )
    }


}



export default Modal