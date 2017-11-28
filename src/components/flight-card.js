import React, { Component } from 'react';

const formatDate = dateString => {
    let date = new Date(dateString)
    return date.toLocaleString()
}

export default class FlightСard extends Component {

    render() {
        let { flight } = this.props
        return (
            <div className="flight-card" id={flight.id}>
                <h3>{flight.carrier}</h3>
                <div className="flight-city">{ flight.direction.from } </div>
                <small>({ formatDate(flight.departure) })</small>
                <div className="arrow">&rarr;</div>
                <div className="flight-city">{ flight.direction.to } </div>
                <small>({ formatDate(flight.arrival) })</small>
            </div>
        )
    }
}
