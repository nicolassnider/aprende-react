import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Hello extends Component{
  render(){
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component{

  render(){
    const textoBool = this.props.isActivated? 'on':'off';
    const mappedArray = this.props.arrayOfNumbers.map(n=>n*2)
    return(
      <div>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{textoBool}</p>
        <p>{mappedArray.join(', ')}</p>
        <p>{this.props.objeto.key1} + {this.props.objeto.key2}</p>
      </div>

    ) 
    
  }
}

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello title="hola prop"/>
      </div>
      <Text 
        arrayOfNumbers = {[1,2,3,4]}
        isActivated         
        number={2}
        objeto={{key1:'value',key2:'value2'}}
        text="texto props" 
        />
    </div>
  );
}

export default App;
