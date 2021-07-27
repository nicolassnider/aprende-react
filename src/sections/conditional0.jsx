//clase 20
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

function conditionalRendering(mostrarA){
    if(mostrarA){
        return <ComponentA/>
    }
    else{
        return <ComponentB/>
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
        const conditionalComponent =  conditionalRendering(this.state.mostrarA);
        return(
            <div>
                <h4>Conditional rendering</h4>
                {conditionalComponent}                
            </div>
        )
    }
}