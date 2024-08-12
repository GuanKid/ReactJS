import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

var destination = document.querySelector("#container");
 
var store = createStore(cartReducer);
   
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  destination
);