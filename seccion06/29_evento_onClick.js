import React, {Component} from 'react';

class App extends Component{
  render(){
    return(
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={()=>alert('hi There!')} >Hi there!</button>
      </div>
    );
  }
}

export default App;