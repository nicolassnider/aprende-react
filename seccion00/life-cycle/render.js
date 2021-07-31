import React,{Component} from 'react'

//stateless component
const HelloRender = (props) =>{
    <h1>
        Hola Render!
    </h1>
}

class Render extends Component{

    constructor(props){
        super(props);
        this.state={
            mensaje:'mensaje inicial Render'
        }
    }

    componentWillMount(){
        console.log('component will mount')
    }

    render(){
        console.log('render Render')
        //return(<HelloRender/>)
        /* return(
            this.state.mensaje === 'mensaje inicial Render' ? 'sip' : null
        ) */
        return(
            [
                <h1 key="a">primer elemento de array</h1>,
                <h2 key="b">segundo elemento de array</h2>,
                <h3 key="c">tercer elemento de array</h3>,
                <h4 key="d">cuarto elemento de array</h4>
            ]
        )
    }
}

export default Render