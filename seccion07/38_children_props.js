import React, { Component } from 'react';

class Box extends Component {
  render() {    
    return (
      <div style={{border: '1px solid #000',margin: 5,padding: 5}}>
        {this.props.children}
      </div>      
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">

        <h4>Childen Props</h4>
        <Box>soy un children 
          <Box>box dentro de children</Box>
        </Box>
        <Box>Otro children Box</Box>
      </div>
    );
  }
}

export default App;
