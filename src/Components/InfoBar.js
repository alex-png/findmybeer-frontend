import '../Containers/Main.css';
import React from 'react'

export default class InfoBar extends React.Component {



    render = () => {
        return (
            <div className="beer-info">
                {this.props.children}
            </div>
        )
    }
}
