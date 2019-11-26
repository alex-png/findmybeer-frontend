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
                <Selector firstTimeSwitch={this.props.firstTimeSwitch}  options={["Margarita", "Pina Colada", "Old Fashion", "Guinness", "Blue Moon", "Coors Light", "Budweiser", "Red Wine", "White Wine"]} />

            </div>
        )
    }


}



export default ModalCard