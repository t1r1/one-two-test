import * as data from '../data/data.json'

const selectedFlights = (state = data.flights, action) => {
	switch (action.type) {
    case "SET_FILTER":
    	if (action.filter === "ALL") {
      	    return data.flights
        } else {
      	    return data.flights.filter( item => item.carrier === action.filter )
        }
    default:
    	return state
    }
}

export default selectedFlights