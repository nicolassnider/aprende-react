import React, { Component } from 'react'

import { Title } from '../components/Title'
import MoviesList from '../components/MoviesList'
import SearchForm from '../components/SearchForm'

export class Home extends Component {

    state = {
        results: [],
        usedSearch: false
      }
    
      _handleResults = (results) => {
        this.setState({ results,usedSearch:true })
      }
    
      _renderResults () {
        console.log('renderresults')
        return this.state.results.length ===0 
        ?<p>Sorry! no found results </p>
        :<MoviesList movies={this.state.results}/>
      }

    render() {
        return (
            <div>
                <Title>Movie search</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm
                        onResults={this._handleResults} />
                </div>
                {
                    this.state.usedSearch
                        ? this._renderResults()
                        : <small>Use the form to search for a movie</small>}
            </div>
        )
    }
}