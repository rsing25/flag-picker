export default function(state = {}, action) {
    switch (action.type) {
    case "COUNTRIES_SELECTED": {
        return action.payload;
    }
    }
    return state;
}
