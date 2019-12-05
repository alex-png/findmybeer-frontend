import React from 'react'

class LogIn extends React.Component {

    state = ({
        error: false
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
        fetch(`http://localhost:3000/users/${username}`)
            .then(res => res.json())
            .then(data => {
                if(data.id) {
                    
                    this.props.loggedIn(data)

                }else{
                    console.log("error!", data)
                    
                    
                }
            }
                
                
                )//end of then




    }//end of funct


    

    render = () =>{
                return (
            <div>
                <h1>log in </h1>
            <form onSubmit={this.handleSubmit} >
                <input placeholder= "Username..." onChange={this.handleChange} name= "username"/>
                <button>Submit</button>
        {this.state.error? (<p style={{ color:'red' }}> This username does not exist. Please try again. </p> ): null}
            </form>
            </div>
        )
    }
}





export default LogIn 