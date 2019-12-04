import '../Containers/Main.css';
import React from 'react'

export default class InfoBar extends React.Component {

    info = () => {
        if (this.props.info.infoValue === "description") {
            return (<>
                <p>{this.props.info.data[0].brewery.name}'s</p>
                <h3>{this.props.info.data[0].name}</h3>
                <p>{this.props.info.data[0].description}</p>
            </>)
        } else if (this.props.info.infoValue === "brewery") {
            return (<>
                <h3>{this.props.info.data[0].brewery.name}</h3>
                <p>{this.props.info.data[0].brewery.description}</p>
            </>)

        }  else if (this.props.info.infoValue === "style") {
            return (<>
                <h3>{this.props.info.data[0].style.name}</h3>
                <p>{this.props.info.data[0].style.description}</p>
            </>)

        } else if (this.props.info.infoValue === "reviews") {
            return (<>
                <p>{this.props.info.data[0].brewery.name}'s</p>
                <h3>{this.props.info.data[0].name}</h3>
                reviews
            </>)

        }
    }



    render = () => {
        return (
            <div className="beer-info">
                {this.info()}
            </div>
        )
    }
}
