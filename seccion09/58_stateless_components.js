import React, { Component } from 'react';

/* Article no tiene ningún tipo de state 
    tampoco utitiza ningún elemento del ciclo de vida
    por lo tanto se puede convertir la clase en una función*/
/* class Article extends Component{
  render(){
    return(
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por {this.props.author}</em></p>
        <date>{this.props.date}</date>
        <article>
          {this.props.children}
        </article>
      </section>
    )
  }
} */

function Article (props){
  return(
    <section>
      <h2>{props.title}</h2>
      <p><em>Escrito por {props.author}</em></p>
      <date>{props.date}</date>
      <article>
        {props.children}
      </article>
    </section>
  )
}

/* también se puede utilizar una arrow funct 
  */
/* class Button extends Component{
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
} */

const Button = ({borderColor, label}) =>{
  <button
    style=
    {
      {
        borderColor:borderColor,
        display:'block'
      }
    }
    >
    {label}
  </button>  
}

Button.defaultProps ={
  borderColor:'#09f'
}

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <h4>stateless components</h4>
        <Article
          author='Nico'
          date = {new Date().toLocaleDateString()}
          title = 'Articulo sobre stateless components' 
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br/>
        <Button
          label='comentar artículo'
        />
      </div>
    );
  }
}

export default App;
