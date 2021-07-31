import React, { Component } from 'react';
import './App.css'
import 'bulma/css/bulma.css'
import { Title } from './components/Title';
import SearchForm from './components/SearchForm';

class App extends Component {
  state = {
    results: []
  }

  _handleResults = (results)=>{
    this.setState({results})
  }

  _renderResults = ()=>{
    const {results} = this.state
    debugger
    return (results.map(
      movie => {return(<p key={movie.id}>{movie.title}</p>)}
    ))
  }

  render() {
    return (
      <div className="App">
        <Title>Movie search</Title>
        <div className="SearchForm-wrapper">
          <SearchForm 
            onResults={this._handleResults}/>
        </div>
        <div>
          {this.state.results.length===0? <p>Sorry, no results</p>:this._renderResults()}
        </div>

      </div>
    );
  }
}

export default App;
