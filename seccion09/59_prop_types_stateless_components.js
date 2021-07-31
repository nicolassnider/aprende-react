import React, { Component } from 'react';
import PropTypes from 'prop-types'

function Article(props) {
  return (
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

Article.propTypes =
{
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.any
}

const Button = (
  {
    borderColor='red',
    label
  }) =>{
        return(
          <button
            style={
              {
                borderColor: borderColor,
                display: 'block'
              }}>
                {label}
          </button>)
        }

class App extends Component {
  render() {
    return (
      <div className="App">
        <h4>stateless components</h4>
        <Article
          author='Nico'
          date={new Date().toLocaleDateString()}
          title='Articulo sobre stateless components'
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <br />
        <Button
          label='comentar artículo'
        />
      </div>
    );
  }
}

export default App;
