export default function(state = [], action) {
    console.log("action.type"+action.type);
    console.log("action.payload"+action.payload);

    switch (action.type) {
        case "COUNTRY_SELECTED": {
            return state.concat([action.payload]);
        }
        case "CLEAR_COUNTRY_SELECTED": {
            state = [];
            return state;
        }
    }
    return state;
}
