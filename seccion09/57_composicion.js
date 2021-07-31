import React, { Component } from 'react';

class Button extends Component{
  render(){
    return(
    <button
      style={
        {
          borderColor:this.props.borderColor,
          display:'block'
        }        
      }>
        {this.props.label}
    </button>
    )
  }
}

Button.defaultProps ={
  borderColor:'#09f'
}

class ButtonDanger extends Component{
  render()
  {
    return(
    <Button
      borderColor='red'
      label={this.props.label}
      />
    )
  }
}

class ButtonWithLegend extends Component{
  render(){
    return(
      <div>
        <Button
          label={this.props.label}
          borderColor={this.props.borderColor}/>
        <smal>{this.props.legend}</smal>
      </div>
    )
  }
}

class App extends Component {
 
  render() {
    console.log('render')
    return (
      <div className="App">
        <h1>Composición de componentes</h1>
        <Button
          label='Click button normal'/>
        <br/>
        <ButtonDanger
          label = 'Button Danger'
          />
        <br/>
        <ButtonWithLegend
          label = 'Button con leyenda'
          legend = 'Leyenda del botòn'/>
        
      </div>
    );
  }
}

export default App;
