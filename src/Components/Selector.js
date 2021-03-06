import React from 'react';


class Selector extends React.Component {

  state = { value: [] }


  //responsible for allowing selections
  handleChange = (event) => {
    event.persist()
    if (this.state.value.includes(event.target) !== true) {

      this.setState(prevState => {
        if (prevState.value.length === 3){

          return ({ value: prevState.value })
        } else {
          return ({ value: [...prevState.value, event.target.value] })
        }
      }
      )

    }
  }


  //will send selections to backend
  handleSubmit = (event) => {
    event.preventDefault();
    let formData = { user_id: this.props.id, data: this.state.value };

    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };

    fetch("http://localhost:3000/initlikedbeers", configObj)
      .then(res => res.json())
      .then(data => { 
        this.props.firstTimeSwitch(data)
      })
  }//


  //resets selector value to nothing
  handleClick = (e) => {
    e.preventDefault()
    this.setState({ value: [] })

  }

  //array of options 
  options = [
  {id:1, name: "Margarita"}, 
  {id:6, name: "Harry Potter"},
  {id:2, name: "Coffee"},
  {id: 3, name:"Whiskey"},
  {id:7, name:"Wine"},
  {id:4, name:"Chocolate"}, 
  {id:5, name:"Pina Colada"},
  {id: 9, name: "Orange"}
  ]
  


  render = () =>{
    
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange} multiple={true} style={{ 
                width: "10rem",
                height: "15rem",
                borderRadius: "10%",
                fontSize: "large",
                overflow: "auto"}} >
            {this.options.map(opt => <option key={opt.id} value={`${opt.id}`} style={{ display: "flex", justifyContent: "center" }}>{`${opt.name}`}</option>)}
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
        <br />
        <button onClick={this.handleClick}> Reset </button>
      </form>
    );


  }



}



export default Selector
