import React from 'react'
import Modal from '../Components/Modal'
class Main extends React.Component {
    state = ({
        firstTime: true,
        data:[],
        img: "",
        info: "",
        brewery: ""
    })


    firstTimeSwitch = (data)=>{
        this.setState({firstTime: false, data: data})
    }



    render() {
        debugger
        return (
            <>
            {this.state.firstTime? <Modal id={this.props.id} firstTimeSwitch={this.firstTimeSwitch}/> : null}
                <h1>BEER IMG:</h1> <img src={this.state.data.length > 0? this.state.data[6].img_url : 404} alt= {this.state.data.length > 0? this.state.data[6].img_url : 404}/>
                <h2>BEER INFO:{this.state.data.length > 0? this.state.data[6].description : 404}  </h2>
                <h2>BREWERY: {this.state.data.length > 0? this.state.data[6].brewery.name : 404} </h2>
            </>)
    } 
}

export default Main