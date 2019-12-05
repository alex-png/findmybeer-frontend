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
                <h1><b>{props.beerName}</b></h1>
                <h3>{props.brewery}</h3>
                    <p>{props.children}</p>
            </div>
        </div>
        </div>

    )
}