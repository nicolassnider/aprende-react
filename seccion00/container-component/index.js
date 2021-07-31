import React, {Component} from 'react'
import BitCoinPrice from './presentational';

class BitCoinPriceContainer extends Component{
    state = {bpi:{}};

    componentDidMount = () =>{
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const {bpi} = data;
                this.setState({bpi})
            })
    }
    render()
    {
        console.log(this.state.bpi)
        return(
            <BitCoinPrice
            bpi={this.state.bpi}/>
        )
    }
}

export default BitCoinPriceContainer