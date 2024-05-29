import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBN9WlmRc3SedmC4agM1G-rYqezGR22iZE",
    authDomain: "crudproject-45834.firebaseapp.com",
    databaseURL: "https://crudproject-45834.firebaseio.com",
    projectId: "crudproject-45834",
    storageBucket: "crudproject-45834.appspot.com",
    messagingSenderId: "590481645308",
    appId: "1:590481645308:web:613e62539967b876"
  };

firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
