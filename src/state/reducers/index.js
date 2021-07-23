import { combineReducers } from "redux";
import FlightReducer from "./flightReducer"

const reducers = combineReducers({
    flight: FlightReducer
})

export default reducers