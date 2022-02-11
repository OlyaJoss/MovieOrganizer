const initialState = {
  allMovies: {
    Search: [
      // matrix
      // fetch results
      {
        Title: "The Matrix",
        Year: "1999",
        imdbID: "tt0133093",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        Title: "The Matrix Reloaded",
        Year: "2003",
        imdbID: "tt0234215",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
      },
      {
        Title: "The Matrix Revolutions",
        Year: "2003",
        imdbID: "tt0242653",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      }

    ]
  },
  favMovies: [
    {
      Title: "The Matrix",
      Year: "1999",
      imdbID: "tt0133093",
      Type: "movie",
      Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },


    //   object
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
        return {
          ...state,
        }
      }

      const newItem = state.allMovies.Search.find((item) => item.imdbID === action.payload.data);

      return {
        ...state,
        favMovies: [...state.favMovies, {...newItem}]
      }

    default:
      return state;
  }
}

export default reducer;

