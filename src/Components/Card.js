import './Styles/Card.css'
import React from 'react'

export default function Card(props) {

    const cardContain = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }

    return (
        <div style={cardContain}>
        <div className="card">
            <img src={props.img} alt="beer img" style={{width:"100%"}} />
            <div className="container">
                <h4><b>{props.beerName}</b></h4>
                <p>Description</p>
            </div>
        </div>
        </div>

    )
}