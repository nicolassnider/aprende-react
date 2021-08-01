import React, { Component } from 'react';
import './App.css'
import 'bulma/css/bulma.css'
import { Title } from './components/Title';
import SearchForm from './components/SearchForm';
import MoviesList from './components/MoviesList';

class App extends Component {
  state = {
    results: [],
    usedSearch: false
  }

  _handleResults = (results) => {
    this.setState({ results,usedSearch:true })
  }

  _renderResults () {
    console.log('renderresults')
    return this.state.results && this.state.results.length ===0 
    ?<p>Sorry! no found results </p>
    :<MoviesList movies={this.state.results}/>
  }

  render() {
    return (
      <div className="App">
        <Title>Movie search</Title>
        <div className="SearchForm-wrapper">
          <SearchForm
            onResults={this._handleResults} />
        </div>
        {
          this.state.usedSearch
          ?this._renderResults() 
          :<small>Use the form to search for a movie</small>}

      </div>
    );
  }
}

export default App;
