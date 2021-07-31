//clase 21
import React,{Component} from 'react'

class ComponentA extends Component{
    render(){
        return(
            <p>Componente A</p>
        )
    }
}

class ComponentB extends Component{
    render(){
        return(
            <p>Componente B</p>
        )
    }
}

export default class ConditionalSection extends Component{
    constructor()
    {
        super();
        this.state = {mostrarA:true}
    }
    
    render()
    {
        const conditionalComponent =  this.state.mostrarA?<ComponentA/>:<ComponentB/>;
        return(
            <div>
                <h4>Conditional rendering</h4>
                {conditionalComponent}                
            </div>
        )
    }
}