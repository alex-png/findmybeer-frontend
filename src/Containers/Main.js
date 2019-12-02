import React from 'react'
import Modal from '../Components/Modal'
class Main extends React.Component {
    state = ({
        data:[],
        img: "",
        info: "",
        brewery: ""
    })


    firstTimeSwitch = (data)=>{
        this.setState({data: data})
        this.props.firstTimeComplete()
    }



    render() { 
        return (
            <>
            {this.props.userInfo.firstTime? <Modal id={this.props.id} firstTimeSwitch={this.firstTimeSwitch} userInfo={this.props.userInfo}/> : <h1> Welcome, {this.props.userInfo.name}! </h1> }
                <h1>{this.state.data.length > 0? this.state.data[0].name : 404}</h1>
                 <img src={this.state.data.length > 0? this.state.data[0].img_url : 404} alt= {this.state.data.length > 0? this.state.data[0].img_url : 404}/>
                <h2>BEER INFO:{this.state.data.length > 0? this.state.data[0].description : 404}  </h2>
                <h2>BREWERY: {this.state.data.length > 0? this.state.data[0].brewery.name : 404} </h2>
                <h2>brewery info: {this.state.data.length > 0? this.state.data[0].brewery.description : 404}   </h2>
                <button> Sounds gross🤢 </button> 
                <button>Interested!</button>
            </>)
    } 
}

export default Main