import React, { Component } from 'react';
import './Favorites.css';
import { connect } from 'react-redux';
import { delFav, clearFav } from '../../redux/actions'


class Favorites extends Component {

  state = {
    // это приходит с сервера
    savedLists: [],
    listTitle: ''
  }

  saveList = () => {
    fetch('https://acb-api.algoritmika.org/api/movies/list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      // отдаем серверу
      body: JSON.stringify({
        "title": this.state.listTitle,
        "movies": this.props.favMovies.map((item) => item.imdbID)
      })
    })
      .then(res => res.json())
      .then(data => {
        this.setState((oldState) => ({
          savedLists: [...oldState.savedLists, { id: data.id, name: data.title }],
          listTitle: ''
        }));
        this.props.clearFav()
      })
      .catch(error => {
        console.log('Произошла ошибка')
      })
  }

  titleChange = (query) => {
    this.setState({ listTitle: query })
  }

  render() {


    return (
      <div className="favorites">
        <input value={this.state.listTitle} placeholder='Например: комедии'
          type="text"
          onChange={(e) => this.titleChange(e.target.value)}
          className="favorites__name" />
        <ul className="favorites__list">
          {this.props.favMovies.map((item) => {
            return <li key={item.imdbID}>{item.Title} ({item.Year})
              <button onClick={() => this.props.delFav(item.imdbID)}
                className="favorites__delete"
                type="button">X
              </button></li>;
          })}
        </ul>
        <button onClick={() => this.saveList()} type="button"
          className="favorites__save">Сохранить список</button>

        {this.state.savedLists.map.length > 0 &&
          this.state.savedLists.map(({ id, name }) => (<p key={id} >
            <a href={`/list/${id}`} target={'_blank'} rel="noopener noreferrer">Открыть список: {name}</a>
          </p>))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delFav: (id) => dispatch(delFav(id)),
  clearFav: () => dispatch(clearFav())
})

export default connect(state => ({ favMovies: state.favMovies }), mapDispatchToProps)(Favorites)
