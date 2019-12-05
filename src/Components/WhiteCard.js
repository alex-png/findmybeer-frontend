import React from 'react'

export default class WhiteCard extends React.Component{
    whiteCard = {
    borderRadius: "10%",
    backgroundColor: "rgba(50, 50, 64, 0.91)",
    backgroundSize: "contain",
    position: "fixed",
    top: "15%",
    left: "25%",
    width: "50vw",
    height: "75vh",
    zIndex: "4",
    opacity: "1",
    textAlign: "center",
    color: "white",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly"
    }

    render = ()=>{
    return( <div style={this.whiteCard}>{this.props.children}</div> )

    }
}