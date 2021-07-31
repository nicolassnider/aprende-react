//componentes descontrolados
import React, {Component} from 'react';

export default class Forms extends Component{

    handleSubmit = (e)=>{
        e.preventDefault();
        const name = this.inputName.value;
        const email = this.inputTwitter.value;
        console.log({name,email});
    }

    handleCheck = (e)=>{
        console.log('handleCheck')
        console.log(e.target.checked)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
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
                    <label htmlFor="aceptTerms">Aceptar términos</label>
                    <input
                        onChange={this.handleCheck}
                        type="checkbox"
                    />
                    <br/>
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}