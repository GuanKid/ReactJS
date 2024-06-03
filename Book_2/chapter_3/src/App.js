import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Rating from './Rating';

function App() {

  return (
    <div>
        <Rating rating='1' />
        <Rating rating='2' />
        <Rating rating='3' />
        <Rating rating='4' />
        <Rating rating='5' />

        <Button variant="outline-info" >Default</Button>
    </div>
  );
}

export default App;
