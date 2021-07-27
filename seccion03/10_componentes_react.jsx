import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/* function Hello(props) {
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{props.title}</h2>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"> React
      </a>
    </header>
  </div>)
} */

/* const Hello = (props) => <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <h2>{props.title}</h2>
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"> React
  </a>
</header>
</div> */

class Hello extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"> React
          </a>
        </header>
      </div>)
  }
}

function App() {
  return (
    <Hello title='Hola desde hello'></Hello>
  );
}

export default App;
