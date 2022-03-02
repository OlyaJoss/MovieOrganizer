export function addToFav(favMovie) {
  return {
    type: 'ADD_TO_FAV',
    payload: {
      data: favMovie
    }
  }
}

export function clearFav() {
  return {
    type: 'CLEAR_FAV'
  }
}

export function delFav(id) {
  return {
    type: 'DEL_FAV',
    payload: {
      data: id
    }
  }
}

export function onSearchUpdate(query) {
  return {
    type: 'ON_SEARCH_UPDATE',
    payload: {
      data: query
    }
  }
}

export function fetchRes(resData) {
  console.log(resData)
  return {
    type: 'FETCH_RES',
    payload: {
      data: resData
    }
  }
}

export function fetchMovies(query) {
  return function (dispatch) {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=f860633b`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return dispatch(fetchRes(data))
      })
  }
}