import React, { Component } from 'react';
import './MovieItem.css';
import {connect} from 'react-redux';
import { addToFav } from '../../redux/actions';

class MovieItem extends Component {
    render() {
        const { title, year, poster } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button onClick={()=> this.props.addToFav()} type="button" className="movie-item__add-button">Добавить в список</button>
                </div>
            </article>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addToFav: (id)=> dispatch(addToFav(id))
})
 
export default connect(null, mapDispatchToProps)(MovieItem);