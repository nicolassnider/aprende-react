import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class Title extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

Title.defaultProps = {
  text:'Default texto',

}

function App() {
  return (
    <div className="App">
      <Title 
        text="texto no default"
      />
      
    </div>
  );
}

export default App;
