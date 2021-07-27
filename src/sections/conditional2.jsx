//clase 22 ejemplo real
import React, { Component } from 'react'

class LoginButton extends Component {
    render() {
        return (
            <button>
                Iniciar Sesión
            </button>
        )
    }
}

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <p>Bienvenido usuario</p>
                <button>
                    Cerrar Sesión
                </button>
            </div>
        )
    }
}

export default class ConditionalSection extends Component {
    constructor() {
        super();
        this.state = { isUserLogged: true }
    }

    render() {
        const conditionalComponent = this.state.isUserLogged ? <LogoutButton /> : <LoginButton />;
        return (
            <div>
                <h4>Conditional rendering</h4>
                {conditionalComponent}
            </div>
        )
    }
}