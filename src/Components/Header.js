import '../Containers/Main.css';
import React from 'react'

export default class Header extends React.Component{



    render=()=>{
        return(
        <div className="header"> 
                <img src="/logo.png"  style={{ height: "2.3em", borderRadius: ".2em", marginLeft: ".2em"}} alt="logo" />
                FIND<h1 style={{fontSize: "1.3em"}}>MY</h1>BEER
                </div>)
    }
}
