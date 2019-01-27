import { combineReducers } from "redux";
import ContinentsReducer from "./reducer_continents";
import ActiveContinentReducer from "./reducer_active_continent";
import CountriesReducer from "./reducer_conuntries";

const rootReducer = combineReducers({
    Continents: ContinentsReducer,
    activeContinent: ActiveContinentReducer,
    Countries: CountriesReducer
});

export default rootReducer;