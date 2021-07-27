import React, { Component } from 'react';

class App extends Component {

  /*constructor por defecto
  constructor (...args){
    super(...args)
  }
  */

  constructor(props){
    console.log('constructor')
    super(props)
    this.state = { mensajeInicial:'mensaje inicial' }
  }

  handleClick =(e)=>{
    console.log('handleClick');
    this.setState({mensajeInicial:'mensaje cambiado'})
  }

  render() {
    console.log('render')
    return (
      <div className="App">
        <h4> Ciclo de montaje </h4>
        {this.state.mensajeInicial}
        <button
        onClick={this.handleClick}
        >Cambiar mensaje</button>
      </div>
    );
  }
}

export default App;
