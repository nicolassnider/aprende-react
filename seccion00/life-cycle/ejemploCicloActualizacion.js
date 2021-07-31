import React,{Component} from 'react';
import PropTypes from 'prop-types';

const ANIMAL_IMAGES = {
    cat: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg',
    dolphin: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg',
    panda:'https://media.istockphoto.com/photos/young-panda-bear-in-forest-picture-id167419956?s=612x612'

}

class AnimalImage extends Component{
    state = {src: ANIMAL_IMAGES[this.props.animal]}

    render(){
        return(
            <div>
                <p>Selected {this.props.animal}</p>
                <img alt={this.props.animal}
                src={this.state.src}
                width='250'></img>
            </div>
        )
    }
}

AnimalImage.propTypes={
    animal:PropTypes.oneOf(['cat','dolphin','panda'])
}

AnimalImage.defaultProps = {
    animal:'panda'
}

class EjemploCicloDeActualizacion extends Component{
    state={animal:'panda'}

    componentWillReceiveProps(nextProps){
        //this.setState({animal:state.animal})
        console.log('componentWillreceiveProps')
        this.setState({src:ANIMAL_IMAGES[nextProps.animal]})
        
    }

    render(){
        console.log('render')
        return(
            <div>
                <h4>ComponentWillReceiveProps</h4>
                <button
                    onClick={()=>this.setState({animal:'panda'})}
                >
                    Panda
                </button>
                <button
                    onClick={()=>this.setState({animal:'cat'})}
                >
                    Cat
                </button>
                <button
                    onClick={()=>this.setState({animal:'dolphin'})}
                >
                    Dolphin
                </button>
                <AnimalImage animal={this.state.animal}/>
                
            </div>
            
        )
    }
}

export default EjemploCicloDeActualizacion