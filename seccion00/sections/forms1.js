//componentes descontrolados
import React, {Component} from 'react';

export default class Forms extends Component{

    handleClick = (e)=>{
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('twitter').value;
        console.log({name,email});
      }
    render(){
        return(
            <div>
                <form>
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            id="name"
                            name="userName"
                            placeholder="nombre usuario"
                        />
                        <label htmlFor="twitter">Twitter:</label>
                        <input
                            id="twitter"
                            name="twitterAccount"
                            placeholder="Cuenta twitter"
                        />
                    </p>
                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }
}