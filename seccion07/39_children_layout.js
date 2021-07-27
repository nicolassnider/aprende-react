import React, { Component } from 'react';

class Box extends Component {
  render() {    
    return (
      <div style={{border: '1px solid #000',margin: 5,padding: 5}}>
        {this.props.children}
      </div>      
    )
  }
}

class Article extends Component{
  render(){
    return(
      <section>
        <h2>{this.props.title}</h2>
        <p><em>Escrito por: {this.props.author}</em></p>
        <Box>{this.props.date}</Box>
        <article>
          {this.props.children}
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
