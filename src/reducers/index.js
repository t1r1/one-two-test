import { combineReducers } from 'redux'
import carrierNames from './carrier-names'
import selectedFlights from './selected-flights'

const rootReducer = combineReducers({
  carrierNames,
  selectedFlights
});

export default rootReducer;