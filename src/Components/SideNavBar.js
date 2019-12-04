import '../Containers/Main.css';
import React from 'react'

export default class SideNavBar extends React.Component {



    render = () => {
        return (
            <div className="side-bar">
                <button onClick={this.props.onClick} className="sideBarLinks" value="description">description</button>
                <button onClick={this.props.onClick} className="sideBarLinks" value="brewery">brewery</button>
                <button onClick={this.props.onClick} className="sideBarLinks" value="style">style</button>
                <button onClick={this.props.onClick} className="sideBarLinks" value="reviews">reviews</button>
                <button onClick={this.props.onClick} className="sideBarLinks" value="my liked beers">my liked beers</button>
            </div>
        )
    }
}
