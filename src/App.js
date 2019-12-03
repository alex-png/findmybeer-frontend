import React from 'react';
import './App.css';
import SignUp from './Components/SignUp.js'
import LogIn from './Components/LogIn.js'
import Main from './Containers/Main.js'

class App extends React.Component {
  state = ({
    loggedIn: false,
    id: 0,
    name: "",
    firstTime: null
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
    this.setState(prevState => ({ 
      loggedIn: !prevState.loggedIn,
      id: data.id, 
      name: data.name, 
      firstTime: false}))
  }

  firstTimeComplete = ()=>{
    this.setState( prevState => ({firstTime: !prevState.firstTime})  )  
  }


  render() {
    
    return (
      <div className="App" >
        <header className="App-header" />
        {this.state.loggedIn ? (
        
        <Main userInfo={this.state} firstTimeComplete={this.firstTimeComplete} />
        ) 
        : 
        (
        <>
        <LogIn loggedIn= {this.loggedInReturning} />
        <br />
        <SignUp loggedIn={this.loggedInFirstTime} />
        </>
        )}
      </div>
    );
  }


}//end of App

export default App;
