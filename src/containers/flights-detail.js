import React, { Component} from 'react';
import { connect} from 'react-redux';

import FlightCard from '../components/flight-card.js';

class FlightsDetail extends Component {
    render () {
        return (
            <div className="flight-list"> 
                { 
                    this.props.selectedFlights.map( item => <FlightCard key={item.id} flight={item} />) 
                } 
            </div>
        )
    }
}

function mapStateToProps(state) {
    let { selectedFlights } = state
    return { selectedFlights }
}

export default connect (mapStateToProps)(FlightsDetail);