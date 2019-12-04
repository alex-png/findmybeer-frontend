import React from 'react'
import Selector from './Selector.js'
import WhiteCard from './WhiteCard.js'
class ModalCard extends React.Component {
    

    render = ()=>{
        return (
        <WhiteCard>
            <div style={{padding: ".8%"}}>
            <h1>Welcome, {this.props.userInfo.name}!</h1>
            <p>Please select your three most favorite alcoholic beverages.</p>
        <Selector firstTimeSwitch={this.props.firstTimeSwitch} id={this.props.id}/> 
        </div>
        </WhiteCard>
        )
    }


}// end of class




export default ModalCard