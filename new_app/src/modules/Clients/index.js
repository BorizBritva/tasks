import React, { Fragment } from 'react';
import Header from '../header.js';
import Filter from '../filter';
import Card from './Card';
import { Link } from 'react-router-dom';
import fone from '../../assest/body-fone.png';
import toHome from '../../assest/back-to-home.png';
import clients from './clients.json';

/*const Clients = () => {
    return (
        <Fragment>
            <div className="container">
                <img src={fone} className="fone-img" />
                <div className="clients-wrap">
                    <div className="to-home">
                        <Link className="to-home__button" to='/'><img src={toHome} /></Link>
                        <h1 className="to-home__desc">Most recent news from our users</h1>
                    </div>
                    <ul className="clients-list">
                        {clients.map((client, index) => (
                            <li>
                                <Card key={index} client={client} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    );
}*/

export default class Clients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            news: clients,
            type: 'all',
        };

        this.changeType = this.changeType.bind(this);


    }

    changeType(optionType) {
        if (optionType == 'all') {
            this.setState({
                news: clients,
                type: optionType,
            })
        } else {
            this.setState({
                news: clients.filter(client => {
                    return client.type == optionType;
                }),
                type: optionType,
            })
        }
    }

    render() {

        return(
            <Fragment>
                <div className="container">
                    <img alt='fone' src={fone} className="fone-img" />
                    <div className="clients-wrap">
                        <div className="to-home">
                            <Link className="to-home__button" to='/'><img src={toHome} /></Link>
                            <h1 className="to-home__desc">Most recent news from our users</h1>
                        </div>
                        <Filter
                            option={this.changeType}
                        />
                        <ul className="clients-list">
                            {this.state.news.map((client, index) => (
                                <li key={index}>
                                    <Card client={client} />
                                </li>
                                )
                            )
                            }
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }


}
