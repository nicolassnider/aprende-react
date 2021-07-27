import React, { Component } from 'react';
import ComponentWillMount from './life-cycle/componentWillMount';

class App extends Component {

  render() {
    console.log('render')
    return (
      <div className="App">
        <ComponentWillMount/>
      </div>
    );
  }
}

export default App;
