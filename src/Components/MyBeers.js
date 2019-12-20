import React from 'react'
import "../Containers/Main.css"
import Card from './Card'

export default class MyBeers extends React.Component {

    state = {
        beers: []
    }

    render = () => {
        return (
            <div className='body' margin='auto'> 
            
            
            {this.state.beers.map( beer => <Card> </Card> )}
            
            
            </div>
        )
    }

 } //end of MyBeers