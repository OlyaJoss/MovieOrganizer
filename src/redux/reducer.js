const initialState = {
    allMovies: {
        Search: []
    },
    favMovies: [],
    inputValue: '',
}

function reducer(state = initialState, action) {
switch (action.type) {
    case 'FETCH_RES':
        return {
            ...state,
            allMovies: action.payload.data
        }
    case 'ON_SEARCH_UPDATE':
        return {
            ...state,
            inputValue: action.payload.data
        }
        default:
            return state;
}
}

export default reducer;

