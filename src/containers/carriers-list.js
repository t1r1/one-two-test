import React, { Component } from 'react';
import { connect } from 'react-redux';
import Store from '../store'

class CarriersList extends Component {

    selectChanged(e) {
        Store.dispatch({ type: 'SET_FILTER', filter: e.target.value })
    }

    render() {
        return (
            <div> 
                <select onChange={this.selectChanged.bind(this)}>
                    { this.props.carrierNames.map(
                        (item, i) => <option key={i} value={item.filter}>{item.name}</option>    
                    )}
                </select>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let { carrierNames } = state
    return { carrierNames };
}

export default connect(mapStateToProps)(CarriersList)