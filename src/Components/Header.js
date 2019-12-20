import '../Containers/Main.css';
import React from 'react'
import { NavLink } from 'react-router-dom';


export default class Header extends React.Component {



    render = () => {
        return (
            <div className="header">
                <img src="/logo.png" style={{ height: "2.3em", borderRadius: ".2em", marginLeft: ".2em" }} alt="logo" />
                FIND<h1 style={{ fontSize: "1.3em" }}>MY</h1>BEER
                <div style={{ display: "flex", marginLeft: "2em", color: "grey" }}>
                    <NavLink to="/" style={{color: "white", textDecoration: "none"}} > find beers|</NavLink>
                    <NavLink to="/mybeers" exact style={{color: "white", textDecoration: "none"}} >my beers|</NavLink>


                </div>
            </div>)
    }
}
