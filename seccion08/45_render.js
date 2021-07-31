import React, { Component } from 'react';
import Render from './life-cycle/render';


class App extends Component {

  render() {
    console.log('render')
    return (
      <div className="App">
        <Render/>
      </div>
    );
  }
}

export default App;
