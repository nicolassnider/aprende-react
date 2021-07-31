import React, { Component } from 'react';
import EjemploDeComponentDidMount from './life-cycle/componentDidMount';

class App extends Component {

  render() {
    console.log('render')
    return (
      <div className="App">
        <EjemploDeComponentDidMount/>
      </div>
    );
  }
}

export default App;
