import React,{Component} from 'react'

function BitCoinPrice(props) {
    const _renderCurrencies =() => {
        const {bpi} = props;

        return Object.keys(bpi).map(currency=>(
            <div key={currency}>
                1 BTC is {bpi[currency].rate}
                <span> {bpi[currency].code}</span>
            </div>
        ))
    }
    
    return(
    <div>
        <h4>{_renderCurrencies()}</h4>
    </div>)
    
}

export default BitCoinPrice