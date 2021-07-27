import React, {Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state ={
      mouseX : 0,
      mouseY : 0
    }
    //enlazar contexto del componente al método
    //this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  //2da forma de enlace, usa arrow function
  handleMouseMove = (e)=>{
    const {clientX,clientY} = e
    this.setState({
      mouseX:clientX,
      mouseY:clientY
    })
  }

  render(){
    return(
      <div className="App">
        <h4>Eventos</h4>
        <div
          onMouseMove={this.handleMouseMove}
          style={
            {
              border: '1px solid #000',
              marginTop: 10,
              padding:10
            }
          }>
            <p>{this.state.mouseX} , {this.state.mouseY}</p>
          </div>
      </div>
    );
  }
}

export default App;
