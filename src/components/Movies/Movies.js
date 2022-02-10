import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import { connect } from 'react-redux';

class Movies extends Component {
   
    render() { 
        return ( 
            <ul className="movies">
                {this.props.allMovies.Search.map((movie) => {
                    return (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                )}
                )}
            </ul>
        );
    }
}

export default connect(state=> ({ allMovies: state.allMovies}), null)(Movies);
