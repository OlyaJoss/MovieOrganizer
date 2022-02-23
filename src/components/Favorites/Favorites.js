import React, {Component} from 'react';
import './Favorites.css';
import {connect} from 'react-redux';
import {delFav} from '../../redux/actions'


class Favorites extends Component {

  state = {
    // это приходит с сервера
    savedLists: []
  }

  filmIds = this.props.favMovies.map((item) => item.imdbID)

  saveList = () => {
    fetch('https://acb-api.algoritmika.org/api/movies/list', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      // отдаем серверу
      body: JSON.stringify({
        "title": "Matrix",

        // TODO: так можно ли делать? Что у нас сейчас в this.filmIds?
        "movies": this.filmIds
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data.id)
        console.log(data.title)

        // TODO: сделать так чтобы данные записывались не поверх старого массива а дополняли его
        // желательно в конец массива который в стейте (как обновить массив в стейте правильно?)

        this.setState(
          {savedLists: [{id: data.id, name: data.title}]}
        )

        console.log(this.state)

      })
      .catch(error => {
        console.log('Произошла ошибка')
      })
  }


  render() {


    return (
      <div className="favorites">
        <input defaultValue={'Новый список'} className="favorites__name"/>
        <ul className="favorites__list">
          {this.props.favMovies.map((item) => {
            return <li key={item.imdbID}>{item.Title} ({item.Year})
              <button onClick={() => this.props.delFav(item.imdbID)}
                      className="favorites__delete"
                      type="button">X
              </button></li>;
          })}
        </ul>
        <button onClick={() => this.saveList()} type="button" className="favorites__save">Сохранить список</button>

        {this.state.savedLists.map.length > 0 &&
        this.state.savedLists.map(({id, name}) => (<p>
          <a href={`/list/${id}`} target={'_blank'}>Открыть список: {name}</a>
        </p>))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  delFav: (id) => dispatch(delFav(id))
})

export default connect(state => ({favMovies: state.favMovies}), mapDispatchToProps)(Favorites)
