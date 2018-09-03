import React from 'react';
import ReactDOM from 'react-dom';
import './sass/index.css';
 import App from './App';
//import App from './App-profitrol';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
