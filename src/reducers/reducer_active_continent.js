export default function(state = {}, action) {
    console.log("action.type"+action.type);
    console.log("action.payload"+action.payload);

    switch (action.type) {
        case "CONTINENT_SELECTED": {
            return action.payload;
        }
    }
    return state;
}
