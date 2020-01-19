import React, { Fragment } from 'react';

/*const Card = props => {

    const {client} = props;

    return (
        <div className="client">
            <div className="client__name"><span>{client.nickname}</span> says:</div>
            <p className="client__msg">"{client.message}"</p>
            <p>{client.type}</p>
        </div>
    )
}

export default Card;*/

export default class Card extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {

        const {client} = this.props;

        return (
            <div className="client">
                <div className="client__name"><span>{client.nickname}</span> says:</div>
                <p className="client__msg">"{client.message}"</p>
            </div>
        )

    }

}
