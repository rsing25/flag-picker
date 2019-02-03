export default function(state = {}, action) {
    switch (action.type) {
        case "CONTINENT_SELECTED": {
            return action.payload;
        }
    }
    return state;
}
