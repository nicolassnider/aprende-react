import React, {Component} from 'react';

class Contador extends Component{

  constructor(props){
    super(props);
    this.state = {contador:this.props.contadorInicial}
    setInterval(() => {
      this.setState({contador: this.state.contador+1})
      
    }, 1000);
  }
  render(){
    console.log('Contador render()');
    return (
      <div>
        <ContadorNumero numero={this.state.contador}/>
      </div>
    )
  }

}

Contador.defaultProps={
  contadorInicial:0
}

class ContadorNumero extends Component{
  render(){
    console.log('ContadorNumero render()');
    return(
      <span>{this.props.numero}</span>
    )
  }
  
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>ropagando state</h1>
        <Contador
          contadorInicial={10}
        />
      </div>
    );
  }
}

export default App;