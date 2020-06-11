import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //App 이부분은 수정가능, 하지만 아래도 수정해야하고, from뒤에 App.js 이기때문에 바꾸면안됨. 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
