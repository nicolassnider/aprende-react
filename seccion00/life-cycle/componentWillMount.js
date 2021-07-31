import React, { Component, component } from 'react';


class ComponentWillMount extends Component {
    constructor(props) {
        console.log('constructor de ComponentWillMount');
        super(props)
        this.state = { mensaje: 'mensaje inicial de ComponentWillMount' }
    }

    componentWillMount(){
        console.log('componentWillMount')
        this.setState({mensaje:'mensaje modificado en componentWillmount'})
    }

    render() {
        console.log('render de ComponentWillMount')
        return (
            <div>
                <h4>Ciclo de montaje: ComponentWillMount</h4>
                <p>{this.state.mensaje}</p>
            </div>
        )
    }
}

export default ComponentWillMount