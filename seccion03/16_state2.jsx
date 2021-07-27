import React, {Component} from 'react';

class Contador extends Component{

  constructor(){
    super();
    this.state = {contador:0}
    setInterval(() => {
      this.setState({contador: this.state.contador+1})
      
    }, 1000);
  }
  render(){
    return (
      <div>
        <h2>El contador está a {this.state.contador}.</h2>
      </div>
    )
  }

}

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>componente state</h1>
        <Contador/>
      </div>
    );
  }
}

export default App;