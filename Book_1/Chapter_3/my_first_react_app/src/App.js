import './App.css';
import React, { Component } from 'react';
import Products from './Products';
import Rating from './Rating';
import { Button } from 'react-bootstrap';

class App extends Component {

  render() {

    const isValid = true;

    return (
      <div>
        <h1>My First React App</h1>
        <Products />
        <Rating rating="1"/>
        <Rating rating="2"/>
        <Rating rating="3"/>
        <Rating rating="4"/>
        <Rating rating="5"/>
        <Button variant="outline-info" disabled={!isValid}>
          Click Me!
        </Button>
      </div>
    );
  }
}

export default App;