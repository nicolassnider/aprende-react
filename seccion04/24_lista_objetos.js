import React, {Component} from 'react';
import cars from './data/cars.json';

class CarItem extends Component{
  render(){
    const {car, id} = this.props;
    return(
      <div>
        <li>
          <p>Key: {id}</p>
          <p><strong>Nombre:</strong> {car.name}</p>
          <p><strong>Marca:</strong> {car.company}</p>
        </li>
      </div>
    )
  }
}

class App extends Component{
  render(){
    return(
      <div className="App">
        <h4>lista de objetos</h4>
        <ul>
          {
            cars.map(car =>{
              return(
                <CarItem
                  car={car}
                  id={car.id}
                  key={car.id}
                />
              )
            })
          }
        </ul>
        
      </div>
    );
  }
}

export default App;