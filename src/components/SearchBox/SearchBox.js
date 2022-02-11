import React, {Component} from 'react';
import './SearchBox.css';
import {connect} from 'react-redux';
import {fetchMovies, onSearchUpdate} from '../../redux/actions';

class SearchBox extends Component {

  searchBoxSubmitHandler = (e) => {
    e.preventDefault();
    this.props.fetchMovies(this.props.inputValue);
  }

  render() {
    const {inputValue} = this.props;

    return (
      <div className="search-box">

        <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
          <label className="search-box__form-label">
            Искать фильм по названию:
            <input
              value={inputValue}
              type="text"
              className="search-box__form-input"
              placeholder="Например, Shawshank Redemption"
              onChange={(e) => this.props.onSearchUpdate(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="search-box__form-submit"
            disabled={!inputValue}
          >
            Искать
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({inputValue: state.inputValue})

const mapDispatchToProps = dispatch => ({
  onSearchUpdate: (query) => dispatch(onSearchUpdate(query)),
  fetchMovies: (query) => dispatch(fetchMovies(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);