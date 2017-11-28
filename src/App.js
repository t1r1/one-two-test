import React, { Component } from 'react';
import './App.css';

import CarriersList from './containers/list.js';
import FlightsDetail from './containers/flights-detail.js'

class App extends Component {
  render() {
    return (
      <div className="App-intro">
          <CarriersList />
          <FlightsDetail />
        </div>
    );
  }
}

export default App;
