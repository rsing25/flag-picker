export default function(state = [], action) {
    console.log("action.type"+action.type);
    console.log("action.payload"+action.payload);

    switch (action.type) {
    case "COUNTRY_SELECTED": {
        return state.concat([action.payload]);
    }
    }
    return state;
}
