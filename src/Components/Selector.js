import React from 'react';


class Selector extends React.Component {
    
  state = {value: []}

  handleChange = (event) => {
    event.persist()
    this.setState(prevState =>  {
      console.log(event)
      if(prevState.value.length === 3){
        return({value: prevState.value})
      }else{
        return ( {value: [...prevState.value, event.target.value]})
      }
    }
    )
    console.log(this.state.value)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value)
    let formData = this.state.value;
     
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
     
    fetch("http://localhost:3000/users", configObj)
    .then(res => res.json())
    .then(console.log);








    this.props.firstTimeSwitch()
  }

  handleClick = (e)=>{
    e.preventDefault()
    this.setState({value: []})
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange} multiple={true} style={{width:'100px', height: '150px'}} >
          {this.props.options.map(opt => <option key={this.props.options.indexOf(opt)} value={`${opt}`} style={{display: "flex", justifyContent: "center"}}>{`${opt}`}</option> )}
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
 