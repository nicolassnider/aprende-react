import React, { Component } from 'react';
import FetchExample from './sections/fetch-example';

class App extends Component {

  render() {
    console.log('render')
    return (
      <div className="App">
        <h1>Fetch Example</h1>
        <FetchExample/>
      </div>
    );
  }
}

export default App;
