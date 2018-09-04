import React, {Component} from 'react'
import Navy from './components/Navy'
const currency = [
    {"currency": "USD", "cripto": "BTC", "title": "Bitcoin", "currentImg": './bc.png'},
    {"currency": "EUR", "cripto": "ETC", "title": "Ethereum", "currentImg": './etherium.png'},
    {"currency": "RUB", "cripto": "LTC", "title": "Litecoin", "currentImg": './Letecoin.png'}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {getData: null, getNominal: null, getCLink: null};
        this.selectMoney = this.selectMoney.bind(this);
    }


    componentDidMount() {
    //console.log('this.props ---- ', this.state)
    this.getBitcoinData(`https://apiv2.bitcoinaverage.com/indices/global/ticker/short?crypto=BTC&fiat=USD,EUR,RUB`);
}


    getBitcoinData(getTargetUrl) {
        fetch(getTargetUrl)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`${response.status}: ${response.statusText}`)
            })
            .then(getData => {
                console.info(`%c --  `, 'background: green; color:white;', getData);
                return this.setState({getData})
            })
            .catch(error => {
                console.log(`%c ${error}`, 'background: red; color:white; ')
            })
    }


    selectMoney(type) {
        //console.log('type.target.textContent - ', type.target.textContent);
        this.setState({getNominal: type.target.textContent});
    }

    render() {
        if (this.state.getData) {
            return (
                <div className="App page">
                    <div className="title-box">
                        <h2>Select currency to exhange: </h2>
                        <ul onClick={this.selectMoney}>
                            <li className="selected">
                                {  !this.state.getNominal ? 'USD' : ( this.state.getNominal  ) }
                            </li>
                            <li>
                                <ul>
                                    {currency.map((obj, index) =>
                                        <li key={`${index}-${obj.currency}`} value={obj.currency}>
                                            {obj.currency}
                                        </li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="content-box">
                        {currency.map((obj, index) =>(
                            <Navy obj={obj}  i={`${index+1}`}  key={`${index}`} data={this.state.getData} item={this.state.getNominal}/>
                            )

                        )}

                    </div>

                    <br/>
                    <br/>


                </div>
            );
        } else {
            return (
                <div className="App">
                    <div>loading...</div>
                </div>
            );
        }

    }
}


export default App;
