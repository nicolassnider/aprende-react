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
    const {
      arrayOfNumbers, 
      multiply,
      objeto,
      title
      
    } = this.props;
    const mappedArray = arrayOfNumbers.map(multiply)
    return(
      <div>
        <h1>{title}</h1>
        <p>{mappedArray.join(', ')}</p>
        <p>{objeto.key1} + {objeto.key2}</p>
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
        multiply = {(number)=>number*4}
        objeto={{key1:'value',key2:'value2'}}
        text="texto props"
        title="titulo del compo" 
        />
    </div>
  );
}

export default App;
