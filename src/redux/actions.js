export function addToFav(data) {
    return {
        type: 'ADD_TO_FAV',
        payload: {
            data: data
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

export function fetchMovies() {
    return function (dispatch, query) {
        fetch(`https://www.omdbapi.com/?s=${query}&apikey=f860633b`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return dispatch(fetchRes(data))
            })
    }
}

