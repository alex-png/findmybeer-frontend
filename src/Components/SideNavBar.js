import '../Containers/Main.css';
import React from 'react'

export default class SideNavBar extends React.Component {



    render = () => {
        return (
            <div className="side-bar">
                <button className="sideBarLinks" >brewery</button>
                <button className="sideBarLinks" >style</button>
                <button className="sideBarLinks" >reviews</button>
                <button className="sideBarLinks" >my liked beers</button>
            </div>
        )
    }
}
