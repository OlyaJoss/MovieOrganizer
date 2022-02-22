import React, {Component} from 'react';
import './Favorites.css';
import {connect} from 'react-redux';
import { delFav } from '../../redux/actions'


class Favorites extends Component {
 
saveList = () => {
  fetch('https://acb-api.algoritmika.org/api/movies/list', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      "title": "Matrix",
      "movies": [
          "tt0068646",
          "tt0098019"
      ]})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
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
            <button onClick={()=> this.props.delFav(item.imdbID)} 
            className="favorites__delete" 
            type="button">X
            </button></li>;
          })}
        </ul>
        <button onClick={() => this.saveList()} type="button" className="favorites__save">Сохранить список</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  delFav: (id) => dispatch(delFav(id))
})

export default connect(state => ({favMovies: state.favMovies}), mapDispatchToProps)(Favorites)
