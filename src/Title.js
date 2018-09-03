import React, {Component} from 'react';


class Title extends Component {
    render() {
        return (
            <div className="title-box">
                <h2>Select currency to exhange:</h2>
                <ul id="selecter">
                    <li className="selected">USD</li>
                    <li>
                        <ul>
                            <li>EUR</li>
                            <li>RUB</li>
                            <li>GBP</li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Title;


