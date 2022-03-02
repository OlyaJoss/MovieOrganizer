const initialState = {
  allMovies: {
    Search: []
  },
  favMovies: [],
  inputValue: ''
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
    case 'ADD_TO_FAV':

      if (state.favMovies.find((item) => item.imdbID === action.payload.data)) {
        return {
          ...state
        }
      }
      const newItem = state.allMovies.Search.find((item) => item.imdbID === action.payload.data);
      return {
        ...state,
        favMovies: [...state.favMovies, {...newItem}]
      }

    case 'CLEAR_FAV':
        return {
          ...state,
          favMovies: []
        }

    case 'DEL_FAV':
      const newFav = state.favMovies.filter((item) => item.imdbID !== action.payload.data)
      return {
        ...state,
        favMovies: newFav
      }
    default:
      return state;
  }
}

export default reducer;

