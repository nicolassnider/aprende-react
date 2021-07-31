import React,{Component} from 'react'

class ComponentDidCatch extends Component{

    state={
        hasError:false,
        errorMessage:''
    }
    componentDidCatch=(error, errorInfo)=>{
        console.log('componentDidCatch')
        console.log(error, errorInfo)
        this.setState(
            {hasError:true,
            errorMessage:error.toString()}
        )
    }

    render(){
        if (this.state.hasError) {
            return(
                <div>
                    <h4>error en la apllicación</h4>
                    <p>{this.state.errorMessage}</p>
                    <button onClick={()=>{this.setState({hasError:false})}} >Volver a aplicación</button>
                </div> 
                    
                )
        }
        return(

            <BotonLanzaError/>
        )
    }
}

class BotonLanzaError extends Component{
    state = {
        throwError: false
    }

    render(){
        if(this.state.throwError){
            throw new Error('Error lanzado por el botón');
        }
        return(
            <button onClick={()=>this.setState({throwError:true})}>Romper</button>
        )
    }
}



export default ComponentDidCatch