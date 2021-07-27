//npm install prop-types -SE
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component{
  static propTypes={
    author: PropTypes.string.isRequired,
  }
  
  render(){
    const {author,children,date,title} = this.props
    return(
      <section>
        <h2>{title}</h2>
        {author && <p><em>Escrito por: {author}</em></p>}
        <date>{date}</date>
        <article>
          {children}
        </article>
      </section>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <Article
          author="Nico"
          date={new Date().toLocaleDateString()}
          title="sobre prop children"
          >
            <p>zaraza de childre</p>
            <p>otro p con zaraza</p>
        </Article>
      </div>
    );
  }
}

export default App;
