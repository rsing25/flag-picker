import { combineReducers } from "redux";
import ContinentsReducer from "./reducer_continents";
import ActiveContinentReducer from "./reducer_active_continent";
import CountriesReducer from "./reducer_conuntries";

const rootReducer = combineReducers({
    continents: ContinentsReducer,
    activeContinent: ActiveContinentReducer,
    countries: CountriesReducer
});

export default rootReducer;