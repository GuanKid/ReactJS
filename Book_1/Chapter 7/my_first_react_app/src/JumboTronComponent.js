import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

class JumboTronComponent extends Component {

  constructor(props){
    super(props);    
  }

  render() { 
    return (
      <div>                
        <Jumbotron>
            <h1>My First React App </h1>
            <p>{this.props.children}</p>
            {/* <p><Button bsStyle="primary">Learn more</Button></p> */}
        </Jumbotron>                                                                                                                                 
      </div>
    );
  }  
}

export default JumboTronComponent;
