import React, { Component } from 'react'

const config = require('../config.json');
const API_KEY = config['x-rapidapi-key'];
const API_HOST = config['x-rapidapi-host'];

class SearchForm extends Component {
    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        const terms = e.target.value;
        
        if(terms.length>3){
            this.checkAutoComplete(terms);
        }
        this.setState({
            inputMovie: terms
        })
    }

    checkAutoComplete = (terms) => {
        
        const termsEncoded = encodeURIComponent(terms);
        const getDetails = 'https://imdb8.p.rapidapi.com/auto-complete?q='
        fetch(`${getDetails}${termsEncoded}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            }
        })
            .then(res => res.json())
            .then(autoCompletedResults => {
                this.setState({ autoCompletedResults: autoCompletedResults })
            })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const value = encodeURIComponent(this.state.inputMovie);

        fetch(`https://imdb8.p.rapidapi.com/title/find?q=${value}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": API_KEY,
                "x-rapidapi-host": API_HOST
            }
        })
            .then(res => {
                res.json().then(resp => {
                    const { query = "", results = [] } = resp
                    this.props.onResults(results)
                    this.setState({ results: [results], query: query })
                });

            })
            .catch(err => {
                console.error(err);
            });

    }

    render() {
        return (
            <form
                onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="input"
                            type="text"
                            onChange={this._handleChange}
                            placeholder="Movie to Search" />
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm