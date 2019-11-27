import React from 'react';
import './App.css';
import SignUp from './Components/SignUp.js'
import LogIn from './Components/LogIn.js'
import Main from './Containers/Main.js'

class App extends React.Component {
  state = ({
    loggedIn: false,
    id: 0
  })

  loggedIn = (data) => {
    this.setState(prevState => ({ loggedIn: !prevState.loggedIn, id: data.id }))
  }

  render() {
    console.log(this.state)
    
    return (
      <div className="App" >
        <header className="App-header" />
        {this.state.loggedIn ? (
        
        <Main id={this.state.id} />
        ) 
        : 
        (
        <>
        <LogIn loggedIn= {this.loggedIn} />
        <br />
        <SignUp  />
        </>
        )}
      </div>
    );
  }


}//end of App

export default App;
