import React from 'react'
import Selector from './Selector.js'

class ModalCard extends React.Component {
    whiteCard = {
        background: "rgba(255,255,255)",
        position: "fixed",
        top: "15%",
        left: "25%",
        width: "50vw",
        height: "75vh",
        zIndex: "3",
        opacity: 1
    }
    render() {
        
        return (
            <div style={this.whiteCard}>
                <h1>Welcome, user_name!</h1>
                <p>Please select your three most favorite alcoholic beverages.</p>
                <Selector id={this.props.id}firstTimeSwitch={this.props.firstTimeSwitch}/>

            </div>
        )
    }


}



export default ModalCard