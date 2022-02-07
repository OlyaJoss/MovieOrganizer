export function addToFav(data) {
    return {
        type: 'ADD_TO_FAV',
        payload: {
            data: data
        }
    }
}

export function fetchRes(resData) {
    return {
        type: 'FETCH_RES',
        payload: {
            data: resData
        }
    }
}


export function fetchMovies() {
    return function (dispatch) {
        fetch('https://www.omdbapi.com/?s=matrix&apikey=f860633b')
            .then(res => res.json())
            .then(data =>
                dispatch(fetchRes(data)))
    }
}

