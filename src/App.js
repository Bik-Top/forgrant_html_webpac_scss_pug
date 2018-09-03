import React, {Component} from 'react'

const currency = [
    {"currency": "AED", "country": "United Arab Emirates Dirham"},
    {"currency": "AFN","country": "Afghan Afghani"}, {"currency": "ALL", "country": "Albanian Lek"},
    {"currency": "AMD", "country": "Armenian Dram"},
    {"currency": "ANG","country": "Netherlands Antillean Guilder"}
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {getData: null}
        this.onCurrencySelect = this.onCurrencySelect.bind(this)
    }


    componentDidMount() {
        this.getBitcoinData()
    }

    onCurrencySelect (e) {
        this.setCurrency(e.target.value)
    }
    setCurrency (currency) {
        this.setState({currency}, this.getBitcoinData)
    }

    getBitcoinData() {
        fetch(`https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD`)
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
            /*.then(
             getData => this.setState({getData})
             )*/
            .catch(error => {
                console.log(`%c ${error}`, 'background: red; color:white; ')
            })
    }


    selectMoney(type) {
        console.log('selectMoney', type.target)
    }

    render() {
        if (this.state.getData) {
            return (
                <div className="App page">
                    <div className="title-box">
                        <h2>Select currency to exhange: {this.onCurrencySelect}</h2>
                        <ul onClick={this.selectMoney}>
                            <li className="selected">{
                                this.state.currency !== 'USD1' && 'USD'
                            }</li>
                            <li>
                                <ul>
                                    {currency.map((obj, index) =>
                                        <li key={`${index}-${obj.country}`} value={obj.currency}> {obj.currency} </li>
                                    )}
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="content-box">
                        <div className="card-box box-1">
                            <div className="card-tile">{this.state.getData.display_timestamp}</div>
                            <div className="card-icon">
                                <img src="./etherium.png" alt="as"/>
                            </div>
                            <div className="card-content">
                                <div className="card-line">
                                    <div className="card-price">Price:</div>
                                    <div className="card-price">$22 526.92</div>
                                </div>
                                <div className="card-line">
                                    <div className="card-trigger">Percent change</div>
                                    <div className="card-trigger">
                                        <div className="flipswitch">
                                            <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs1"
                                                   defaultChecked={true}/>
                                            <label className="flipswitch-label" htmlFor="fs1">
                                                <span className="flipswitch-inner"/>
                                                <span className="flipswitch-switch"/>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div className="h">
                                    <div className="card-line">
                                        <div className="grey">Hour change</div>
                                        <div className="green">+266%</div>
                                    </div>
                                </div>
                                <div className="d">
                                    <div className="card-line">
                                        <div className="grey">Day change</div>
                                        <div className="red">+266%</div>
                                    </div>
                                </div>
                                <div className="w">
                                    <div className="card-line">
                                        <div className="grey">Week change</div>
                                        <div className="green">+266%</div>
                                    </div>
                                </div>
                                <div className="m">
                                    <div className="card-line">
                                        <div className="grey">Month change</div>
                                        <div className="green">+266%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <p className="App-data">
                        -DATA:{this.onCurrencySelect}
                        <br/>
                        DATA:
                    </p>


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
