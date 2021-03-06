import React,{Component} from 'react'

class FetchExample extends Component{

    state={
        bpi:{}
    }

    componentDidMount(){
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(res=>res.json())
        .then(data => {
            const {bpi} = data
            this.setState({bpi})
        })
    }

    _renderCurrencies=()=>{
        const {bpi} = this.state;
        const currencies = 
            Object.keys(bpi)
                .map(currency=>(
                    <div key={currency}>
                        1 BTC es {bpi[currency].rate}
                        <span> {currency}</span>
                    </div>))
        return currencies
    }

    render(){
        return(
            <div>
                {this._renderCurrencies()}
            </div>
        )
    }
}

export default FetchExample