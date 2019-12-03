import './Main.css';
import React from 'react'
import Modal from '../Components/Modal'

class Main extends React.Component {
    state = ({
        data:[]
    })


    firstTimeSwitch = (data)=>{
        this.setState({data: data})
        this.props.firstTimeComplete()
    }

    handleClick = (e) =>{
        e.preventDefault()
        if(e.target.value === "no"){
            this.setState(prevState=> ({data: prevState.data.slice(1)}))
        }else{

            let formData = { user_id: this.props.userInfo.id, beer_id: this.state.data[0].id };

            let configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            };

            fetch("http://localhost:3000/likedbeer", configObj)
                .then(res => res.json())
                .then(data => {console.log("RECC BEER",data)})
                .then(
                    this.setState(prevState=> ({data: prevState.data.slice(1)}))
                )

        }
    }//end of function 

    render() { 

        return (
            <div >
            <div className="side-bar"> Hello </div>
            <div className="header"></div>
            <div className="beer-info"> 
                <h2>
                {this.state.data.length > 0? this.state.data[0].brewery.name: 404} says
                </h2>
                <p>{this.state.data.length > 0? this.state.data[0].description : 404}</p>
            
            </div>

            <div className="body"> 
            {this.props.userInfo.firstTime? 
                (<Modal id={this.props.userInfo.id} firstTimeSwitch={this.firstTimeSwitch} userInfo={this.props.userInfo}/>)
            :
                (<><h1> Hey, {this.props.userInfo.name}! </h1> <p>you might like...</p></>) }
                <h1 style={{fontSize:"5.5em"}} >{this.state.data.length > 0? this.state.data[0].name : 404}</h1>
                <img src={this.state.data.length > 0? this.state.data[0].img_url : 404} alt= {this.state.data.length > 0? this.state.data[0].img_url : 404}/>
                
            
            
            <button onClick={this.handleClick} value="no"  > Sounds gross </button> 
            <br />
            <button onClick={this.handleClick} value="yes"  >Interested!</button>
            </div>
            
            
            </ div>
            
            )
            
            // <h2>brewery info {this.state.data.length > 0? this.state.data[0].brewery.description : 404}</h2>
            
        }// end of render 
        
        componentDidMount() {
        if (this.state.data.length < 1) {
            console.log("FETCH ME SOME RECCS")

            let formData = {user_id: this.props.userInfo.id};

            let configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            };

            fetch("http://localhost:3000/reccomended_beers", configObj)
                .then(res => res.json())
                .then(reccs => {
                    if(reccs.length > 1){
                        this.setState({data: reccs})
                    }else{
                     console.log(reccs)   
                    }
                })
        }

    }

}

export default Main