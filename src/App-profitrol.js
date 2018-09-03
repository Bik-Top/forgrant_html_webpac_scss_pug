import React, {Component} from 'react';

import Title from './Title';


class App extends Component {


    checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText);
            error.response = response;
            throw error
        }
    }

    parseJSON(response) {
        return response.json();
    }


    render() {
        fetch('https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD')
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(function (data) {
                console.info('request succeeded with JSON response', data);
                // let myE = document.getElementById('ap');
                // myE.innerHTML = data.display_timestamp;


            })

            .catch(function (error) {
                console.log('request failed', error)
            });

        return (
            <div className="App page">
                <Title/>

                <div className="content-box">
                    <div className="card-box box-1">
                        <div className="card-tile">Ethereum</div>
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
                    <div className="card-box box-2">
                        <div className="card-tile">Ethereum</div>
                        <div className="card-icon">
                            <img src="./Letecoin.png" alt="as"/>
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
                                        <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs2"
                                               defaultChecked={true}/>
                                        <label className="flipswitch-label" htmlFor="fs2">
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
                    <div className="card-box box-3">
                        <div className="card-tile">Ethereum</div>
                        <div className="card-icon">
                            <img src="./bc.png" alt="as"/>
                        </div>
                        <div className="card-content">
                            <div className="card-line">
                                <div className="card-price ">Price:</div>
                                <div className="card-price ">$22 526.92</div>
                            </div>
                            <div className="card-line">
                                <div className="card-trigger ">Percent change</div>
                                <div className="card-trigger ">
                                    <div className="flipswitch">
                                        <input type="checkbox" name="flipswitch" className="flipswitch-cb" id="fs3"
                                               defaultChecked={true}/>
                                        <label className="flipswitch-label" htmlFor="fs3">
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
            </div>
        );
    }
}

export default App;
