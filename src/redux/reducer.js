const initialState = {

}

function reducer(state = initialState, action) {
switch (action.type) {
    case 'ADD_TO_FAV':
        return {
            ...state,
            id: action.payload.id
        }
        default:
            return state;
}
}

export default reducer;