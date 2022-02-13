import React, {Component} from 'react';
import './MovieItem.css';
import {connect} from 'react-redux';
import {addToFav} from '../../redux/actions';

class MovieItem extends Component {

  render() {
    const {imdbID, Title, Year, Poster} = this.props;
    return (
      <article className="movie-item">
        <img className="movie-item__poster"
             src={Poster}
             alt={Title}
        />
        <div className="movie-item__info">
          <h3 className="movie-item__title">
            {Title}&nbsp;({Year})
          </h3>
          <button onClick={() => this.props.addToFav(imdbID)}
                  type="button"
                  disabled={this.props.disabled}
                  className="movie-item__add-button">
                    
            Добавить в
            список
          </button>
        </div>
      </article>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToFav: (id) => dispatch(addToFav(id))
})

const mapStateToProps = (state) => {
  return {
    favMovies: state.favMovies,
    disabled: state.disabled
}
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
// export default connect(state => ({favMovies: state.favMovies}), mapDispatchToProps)(MovieItem);