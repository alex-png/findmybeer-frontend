import React from 'react'
import Modal from '../Components/Modal'
class Main extends React.Component {
    state = ({
        firstTime: true,
        img: "",
        info: "",
        brewery: ""
    })


    firstTimeSwitch = ()=>{
        this.setState({firstTime: false})
    }



    render() {
        
        return (
            <>
            {this.state.firstTime? <Modal firstTimeSwitch={this.firstTimeSwitch}/> : null}
                <h1>BEER IMG: {this.state.img}  </h1>
                <h2>BEER INFO:{this.state.info}  </h2>
                <h2>BREWERY: {this.state.brewery} </h2>
            </>)
    } 
}

export default Main