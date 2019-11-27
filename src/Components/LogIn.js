import React from 'react'

class LogIn extends React.Component {

    state = ({
        username: ''
    })

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {

        e.preventDefault()
        const username = this.state.username.replace(/\s/g, '')
        
        console.log("GETTING TO DATABASE!")
     
        fetch(`http://localhost:3000/users/${username}`)
            .then(res => res.json())
            .then(data => {
                if(data.status === 200){
                    console.log(data)
                    this.props.loggedIn(data)
                }else{
                    console.log(data.error)
                }
            }
                
                
                )//end of then




    }//end of funct


    

    render() {
                return (
            <div>
                <h1>Log In Existing User! </h1>
            <form onSubmit={this.handleSubmit} >
                <input placeholder= "Username..." onChange={this.handleChange} name= "username"/>
                <button>Submit</button>
        {this.state.error? (<p style={{ color:'red' }}> This username {this.state.error} Please try another. </p> ): null}
            </form>
            </div>
        )
    }
}





export default LogIn 