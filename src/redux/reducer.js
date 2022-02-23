const initialState = {
  allMovies: {
    Search: []
  },
  favMovies: [
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133093",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133095",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0138093",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
  ],
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
    case 'ADD_TO_FAV':

      if (state.favMovies.find((item) => item.imdbID === action.payload.data)) {
        console.log('1 ветка')
        return {
          ...state
        }
      }
      const newItem = state.allMovies.Search.find((item) => item.imdbID === action.payload.data);
      return {
        ...state,
        favMovies: [...state.favMovies, {...newItem}]
      }

    case 'DEL_FAV':
      console.log(action.payload.data)
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

