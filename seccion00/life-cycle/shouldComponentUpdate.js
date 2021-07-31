import React,{Component} from 'react';

const ANIMAL_IMAGES = {
    cat: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg',
    dolphin: 'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg',
    panda:'https://media.istockphoto.com/photos/young-panda-bear-in-forest-picture-id167419956?s=612x612'

}

const ANIMALS = Object.keys(ANIMAL_IMAGES);

class AnimalImage extends Component{
    state={
        src:ANIMAL_IMAGES[this.props.animal]
    }

    handleClick=(e)=>{
        console.log(e)
    }

    render(){
        return(
        <div>
            <p>Selected{this.state.animal}</p>
            <img
                alt={this.props.animal}
                src={this.state.src}
                width='250'>
                </img>
            <button onClick={this.handleClick('cat')}>cat</button>
        </div>)
    }
}

export default AnimalImage