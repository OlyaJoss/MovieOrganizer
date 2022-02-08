import React, { Component } from 'react';
import './SearchBox.css';
import { connect } from 'react-redux';
import { onSearchUpdate } from '../../redux/actions';

class SearchBox extends Component {
    // state = {
    //     searchLine: ''
    // }
    // searchLineChangeHandler = (e) => {
    //     this.setState({ searchLine: e.target.value });
    // }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    render() {
        const { inputValue } = this.props;
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
                            onChange={(e)=> this.props.onSearchUpdate(e.target.value)}
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
const mapDispatchToProps = dispatch => ({
    onSearchUpdate: (query) => dispatch(onSearchUpdate(query))
})

export default connect(state=> ({ inputValue: state.inputValue}), mapDispatchToProps)(SearchBox);