import React, {Component} from 'react';

class App extends Component{
  handleClick (e){
    console.log(e);
    alert('Hi There!');
  }
  render(){
    return(
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
      </div>
    );
  }
}

export default App;

/* SyntheticBaseEvent {_reactName: "onClick", _targetInst: null, type: "click", nativeEvent: PointerEvent, target: button, …} */