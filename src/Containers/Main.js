import './Main.css';
import React from 'react'
import Modal from '../Components/Modal'
import ModalCard from '../Components/ModalCard.js'
import Body from '../Components/Body.js'
import Header from '../Components/Header.js'
import SideNavBar from '../Components/SideNavBar.js'
import InfoBar from '../Components/InfoBar.js'
import Card from '../Components/Card.js'
// import LikeButton from '../Components/LikeButton'
// import DislikeButton from '../Components/DislikeButton'


class Main extends React.Component {
    state = ({
        data: [],
        infoValue: "description",
        likedBeers: false
    })


    firstTimeSwitch = (data) => {
        this.setState({ data: data })
        this.props.firstTimeComplete()
    }

    handleClick = (e) => {
        e.preventDefault()

        if (e.target.value === "dislike button") {
            let formData = { user_id: this.props.userInfo.id, beer_id: this.state.data[0].id };

            let configObj = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            };

            fetch("http://localhost:3000/dislikedbeer", configObj)
                .then(res => res.json())
                .then(this.state.data.length === 1? this.fetchReccBeers() : this.setState(prevState => ({ data: prevState.data.slice(1) })))
            // if(this.state.data.length <= 1){
            //     this.fetchReccBeers()
            // }else{
            //     this.setState(prevState => ({ data: prevState.data.slice(1) }))
            // }
        } else if(e.target.value === "like button") {
            
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
                .then( this.state.data.length === 1? this.fetchReccBeers() : this.setState(prevState => ({ data: prevState.data.slice(1) })))

        }
        else if(e.target.value === "liked beers"){
            debugger
            if(this.props.userInfo.user.liked_beers){
                console.log("beers",this.props.userInfo.user)
                this.setState( prevState => ({likedBeers: !prevState.likedBeers})
                )
            }else{
                alert("You need to like some beers first!")
            }
        }
        else{
            this.setState({
                infoValue: e.target.value
            })
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
                <Header> 
                {/* <button style={{background: "inherit", color: "white", fontSize: "large", borderStyle: "none"}} 
                onClick={this.handleClick} className="sideBarLinks" 
                value="liked beers">
                    liked beers
                </button> */}
                </Header>

                <SideNavBar onClick={this.handleClick} />

                {this.state.data.length > 0? (
                    <>
                {this.state.likedBeers? <Card> </Card> : null}
                <InfoBar info={this.state}>
                </InfoBar>

                <Body>

                    <h1 style={{ marginBlockStart: "0em", marginBlockEnd: "0em", color:"white" }}> Hey, {this.props.userInfo.name}! </h1>
                    <p style={{ color: "grey", marginBlockStart: "0.5em" }}> you might like... </p>

                    
                        <Card
                            beerName={this.state.data[0].name}
                            brewery={this.state.data[0].brewery.name}
                            img={this.state.data[0].img_url}
                        />
                    

                    <br />
                    <button value="dislike button" onClick={this.handleClick}> NOPE</button>
                    <button value="like button" onClick={this.handleClick}>YESSIR</button>
                    {/* <LikeButton onClick={this.handleClick}/> 
                    <br /> */}
                </ Body>
                </>
                )
                : 
                null  
                }
                

            </>)
        )


    }// end of render 


    fetchReccBeers = ()=>{
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
                    if(reccs.length > 1){
                        this.setState({ data: reccs })
                    }else{
                        this.props.zeroBeerRenderQuizAgain()
                    }
                })
    }



    componentDidMount = ()=>{
        if (this.props.userInfo.firstTime === false) {
            this.fetchReccBeers()
            
        }


    }// end of comp did mount

} //end of class

export default Main

//test