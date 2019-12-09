import React from 'react'
import Selector from './Selector.js'
import WhiteCard from './WhiteCard.js'
class ModalCard extends React.Component {
    

    render = ()=>{
        return (
        <WhiteCard>
            <div style={{padding: ".8%"}}>
            <h1>Welcome, {this.props.userInfo.name}!</h1>
            <p>Choose <b>three </b> favorites! </p>
        <Selector firstTimeSwitch={this.props.firstTimeSwitch} id={this.props.id}/> 
        </div>
        </WhiteCard>
        )
    }


}// end of class




export default ModalCard