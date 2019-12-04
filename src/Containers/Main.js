import './Main.css';
import React from 'react'
import Modal from '../Components/Modal'
import ModalCard from '../Components/ModalCard.js'
import Body from '../Components/Body.js'
// import LikeButton from '../Components/LikeButton'
// import DislikeButton from '../Components/DislikeButton'


class Main extends React.Component {
    state = ({
        data: []
    })


    firstTimeSwitch = (data) => {
        this.setState({ data: data })
        this.props.firstTimeComplete()
    }

    handleClick = (e) => {
        e.preventDefault()
        
        if (e.target.value === "no") {
            this.setState(prevState => ({ data: prevState.data.slice(1) }))
        } else {
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
                .then(data => { console.log("RECC BEER", data) })
                .then(
                    this.setState(prevState => ({ data: prevState.data.slice(1) }))
                )

        }
    }//end of function 


    render = () => {

        return (this.props.userInfo.firstTime ?
            (<>
                <Modal />
                <ModalCard id={this.props.userInfo.id} firstTimeSwitch={this.firstTimeSwitch} userInfo={this.props.userInfo} />

            </>)
            :
            (<>
                <div className="header"> 
                <img src="/logo.png"  style={{ height: "2.3em", borderRadius: ".2em", marginLeft: ".2em"}} alt="logo" />
                FIND<h1 style={{fontSize: "1.3em"}}>MY</h1>BEER
                <form><input style={{
                        borderRadius: ".7em",
                        borderStyle: "none",
                        height: "1.2em",
                        width: "5em",
                        backgroundColor: "white",
                        textAlign: "center",
                        fontSize: "x-large",
                        color: "grey",
                        marginLeft: "1em"                    
                    }} value= "search..." /></form>
                </div>

                <div className="side-bar">
                <button className="sideBarLinks" >brewery</button>
                <button className="sideBarLinks" >style</button>
                <button className="sideBarLinks" >reviews</button>
                <button className="sideBarLinks" >my liked beers</button>

                </div>

                <div className="beer-info">
                    <h2>{this.state.data.length > 0 ? this.state.data[0].brewery.name : 404} says </h2>
                    <p>{this.state.data.length > 0 ? this.state.data[0].description : 404}</p>
                </div>

                <Body>
                    <>
                    <h1 style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}> Hey, {this.props.userInfo.name}! </h1>
                    <p style={{ color: "grey", marginBlockStart: "0.5em", marginBlockEnd: "0em" }}> you might like... </p>
                    <h1>{this.state.data.length > 0 ? this.state.data[0].name : 404}</h1>
                    {this.state.data.length > 0 ? <img className="beerImg" src={this.state.data[0].img_url} alt={this.state.data[0].name} /> : 404}
                    <br />
                    <button value="no"  onClick={this.handleClick}> NOPE</button>
                    <button value="yes" onClick={this.handleClick}>YESSIR</button>

                    {/* <LikeButton onClick={this.handleClick}/> */}
                    <br />
                    </>
                </ Body>

            </>)
        )


    }// end of render 

    componentDidMount() {
        if (this.state.data.length < 1) {
            console.log("FETCH ME SOME RECCS")

            let formData = { user_id: this.props.userInfo.id };

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
                    if (reccs.length > 1) {
                        this.setState({ data: reccs })
                    } else {
                        console.log(reccs)
                    }
                })
        }


    }// end of comp did mount

} //end of class

export default Main