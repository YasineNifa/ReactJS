import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDom.render has two parameters
// First parameter : What do I want to render
// Second parameter : Where I want to render it
// We specify the root component which is App in this case
// and the dom element which will be controlled by react
// it is an element with id = root
// it is the element in our index.html file in the div tag
// it is called the root dom node because inside it will be controlled by react


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
