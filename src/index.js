import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chatkit from '@pusher/chatkit';


ReactDOM.render(React.createElement(<App />), document.getElementById('#root'));
//ReactDOM.render(React.createElement(<App />), document.getElementById('testing'));
serviceWorker.unregister();
