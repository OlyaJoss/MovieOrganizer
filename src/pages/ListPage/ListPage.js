import React, { Component } from 'react';
import './ListPage.css';

class ListPage extends Component {
  state = {
    favListId: [],
    favListTitle: '',
    favListMovies: []
  }


  fetchList = (id) => {
    fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({ favListId: data.movies, favListTitle: data.title })
        const listMovies = data.movies.map((id)=> {
          console.log(id)
           return this.getMovies(id)
        })
        console.log(listMovies)
        return Promise.all(listMovies)
      })
      .then(list => {
        console.log(list)
        this.setState({ favListMovies: list })
      })
  }

  getMovies = (id) => {
    return fetch(`https://www.omdbapi.com/?i=${id}&apikey=f860633b`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        return data
      })
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id);
    this.fetchList(id)
  }

  render() {

    if (this.state.favListMovies.length === 0) {
     return ( <p>Список загружается</p>
     )}
    return (
      <div className="list-page">
        <h1 className="list-page__title">{this.state.favListTitle}</h1>
        <ul>
          {this.state.favListMovies.map((item) => {
            return (
              <li key={item.imdbID}>
                <a href={`https://www.imdb.com/title/${item.imdbID}/`} target="_blank" 
                rel="noopener noreferrer">{item.Title} ({item.Year})</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ListPage