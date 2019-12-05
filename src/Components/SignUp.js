  
import React from 'react'

class SignUp extends React.Component {

    state = ({
        name: '',
        data: [],
        id: 0,
        firsttime: true,
        error: false

    })

    //controlled form for input
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const username = this.state.username.replace(/\s/g, '')
        console.log("POSTING TO DATABASE!")
        let formData = {
            name: username
        };
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ user: formData })
        };

        fetch("http://localhost:3000/users", configObj)
            .then(res => res.json())
            .then( data => {

                if(typeof data.name === "string"){
                this.setState({
                    error: false
                    })
                    this.props.loggedIn(data) 

                }else{
                    this.setState({error: data.name})
                }
            
            }//end of callback
            )//end of then




    }//end of funct


    

    render = ()=>{
                return (
            <div>
                <h1>sign up </h1>
            <form onSubmit={this.handleSubmit} >
                <input placeholder= "Username..." onChange={this.handleChange} name= "username"/>
                <button>Submit</button>
        {this.state.error? (<p style={{ color:'red' }}> This username {this.state.error} Please try another. </p> ): null}
            </form>
            </div>
        )
    }
}





export default SignUp 