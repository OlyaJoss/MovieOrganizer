import React, {Component} from 'react';
import './Favorites.css';
import {connect} from 'react-redux';
import { delFav } from '../../redux/actions'


class Favorites extends Component {

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
        <button type="button" className="favorites__save">Сохранить список</button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  delFav: (id) => dispatch(delFav(id))
})

export default connect(state => ({favMovies: state.favMovies}), mapDispatchToProps)(Favorites)
