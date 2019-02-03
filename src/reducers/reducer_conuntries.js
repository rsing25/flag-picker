export default function(state = [], action) {
    switch (action.type) {
        case "COUNTRY_SELECTED": {
            if(action.payload.checked === true) {
                return state.concat([action.payload.country]);
            } else {
                return state.filter( (value, ind)=>{
                    return value !== action.payload.country 
                });
            }
        }
        case "CLEAR_COUNTRY_SELECTED": {
            state = [];
            return state;
        }
    }
    return state;
}
