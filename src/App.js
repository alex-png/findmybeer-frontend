import React from 'react';
import './App.css';
import SignUp from './Components/SignUp.js'
import LogIn from './Components/LogIn.js'
import Main from './Containers/Main.js'
import WhiteCard from './Components/WhiteCard';
import './Containers/Main.css'
class App extends React.Component {
  state = ({
    loggedIn: false,
    id: 0,
    name: "",
    firstTime: false,
    user: null 
    })

  loggedInFirstTime = (data) => {
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn, 
      id: data.id, 
      name: data.name, 
      firstTime: true
    }))
  }

  loggedInReturning = (data) => {
    console.log(data)
    this.setState(prevState => ({ 
      loggedIn: !prevState.loggedIn,
      id: data.id, 
      name: data.name, 
      firstTime: false,  
      user: data}))
  }

  firstTimeComplete = () =>{
    this.setState( prevState => ({firstTime: !prevState.firstTime})  )  
  }

  zeroBeerRenderQuizAgain = () => {
    this.setState(prevState => ({firstTime: !prevState.firstTime}) )
  }


  render = () => {

    return (
      <div className="App" >
        {this.state.loggedIn ? (
          <Main userInfo={this.state} firstTimeComplete={this.firstTimeComplete}  zeroBeerRenderQuizAgain={this.zeroBeerRenderQuizAgain}  />
        )
          :
          (<>
            <div className="header"> 
            <img src="/logo.png"  style={{ height: "2.3em", borderRadius: ".2em", marginLeft: ".2em"}} alt="logo" />
            FIND<h1 style={{fontSize: "1.3em"}}>MY</h1>BEER
            </div>

            <WhiteCard >
              <h1>you've had your last PBR.</h1>
              <LogIn loggedIn={this.loggedInReturning} />
              <p>or...</p>
              <SignUp loggedIn={this.loggedInFirstTime} />

            </WhiteCard>x
            </>
          )}
      </div>
    );
  }



  // componentDidMount() {
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "https://kit.fontawesome.com/b6207d2735.js";

  //   // For body
  //   document.body.appendChild(script);
  // }
 


}//end of App

export default App;
