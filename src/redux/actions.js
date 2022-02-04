export function addToFav(id) {
    return {
        type: 'ADD_TO_FAV',
        payload: {
            id: id
        }
    }
}

export function fetchMovies() {
    return function (dispatch) {
        fetch('')
            .then(res => res.json())
            .then()
    }
}