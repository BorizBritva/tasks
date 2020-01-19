import React, { Fragment } from 'react';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange(e) {
        this.props.option(e.target.value);
    }

    render() {
        return(
            <form className="filter">
                <span className="client__name  type__name">Select type of news: </span>
                <select className="filterOption" onChange={this.handleOptionChange}>
                    <option value="all">All</option>
                    <option value="global">Global</option>
                    <option value="art">Art</option>
                    <option value="politics">Politics</option>
                </select>
            </form>
        )
    }
}
