import React from 'react';
import './App.css';
import SignUp from './Components/SignUp.js'
import Main from './Containers/Main.js'

class App extends React.Component {
  state = ({
    loggedIn: true
  })

  loggedIn = () => {
    this.setState(prevState => ({ loggedIn: !prevState.loggedIn }))
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header" />
        {this.state.loggedIn ? (
        
        <Main />
        ) 
        : 
        (<SignUp loggedIn= {this.loggedIn} />)}
      </div>
    );
  }


}//end of App

export default App;
