import '../Containers/Main.css';
import React from 'react'

export default class Header extends React.Component{



    render=()=>{
        return(
        <div className="header"> 
                <img src="/logo.png"  style={{ height: "2.3em", borderRadius: ".2em", marginLeft: ".2em"}} alt="logo" />
                FIND<h1 style={{fontSize: "1.3em"}}>MY</h1>BEER
                <form><input style={{
                        borderRadius: ".7em",
                        borderStyle: "none",
                        height: "1.2em",
                        width: "5em",
                        backgroundColor: "white",
                        textAlign: "center",
                        fontSize: "x-large",
                        color: "grey",
                        marginLeft: "1em"                    
                    }} value= "search..." /></form>
                </div>)
    }
}
