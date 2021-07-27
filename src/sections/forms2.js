//componentes descontrolados
import React, {Component} from 'react';

export default class Forms extends Component{

    handleClick = (e)=>{
        e.preventDefault();
        const name = this.inputName.value;
        const email = this.inputTwitter.value;
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
                            ref={inputElement => this.inputName = inputElement}
                        />
                        <label htmlFor="twitter">Twitter:</label>
                        <input
                            id="twitter"
                            name="twitterAccount"
                            placeholder="Cuenta twitter"
                            ref={inputElement => this.inputTwitter = inputElement}
                        />
                    </p>
                    <button onClick={this.handleClick}>Enviar</button>
                </form>
            </div>
        )
    }
}