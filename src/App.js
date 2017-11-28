import React, { Component } from 'react';

import CarriersList from './containers/carriers-list.js';
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
