import React, {Component} from 'react';

class Navy extends Component {


    render() {
        return (
            <div className={`card-box box-${this.props.i}`} >
                <div className="card-tile">{this.props.obj.title}</div>
                <div className="card-icon">
                    <img src={this.props.obj.currentImg} alt="as"/>
                </div>
                <div className="card-content">
                    <div className="card-line">
                        <div className="card-price">Price:</div>
                        <div className="card-price">$   </div>
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

        );
    }
}


export default Navy;
