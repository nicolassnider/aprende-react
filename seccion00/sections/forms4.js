//componentes descontrolados
import React, { Component } from 'react';

export default class Forms extends Component {

    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTerms: true,
            inputTwitter: '@',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(this.state);
    }

    handleCheck = (e) => {
        this.setState({inputTerms:e.target.checked})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input
                            id="name"
                            name="userName"
                            onChange={e => this.setState({ inputName: e.target.value })}
                            placeholder="nombre usuario"
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}
                        />
                        <label htmlFor="twitter">Twitter:</label>
                        <input
                            id="twitter"
                            name="twitterAccount"
                            onChange={e => this.setState({ inputTwitter: e.target.value })}
                            placeholder="Cuenta twitter"
                            ref={inputElement => this.inputTwitter = inputElement}
                            value={this.state.inputTwitter}
                        />
                    </p>
                    <label htmlFor="aceptTerms">Aceptar términos</label>
                    <input
                        checked={this.state.inputTerms}
                        onChange={this.handleCheck}
                        type="checkbox"
                    />
                    <br />
                    <button>Enviar</button>
                </form>
            </div>
        )
    }
}