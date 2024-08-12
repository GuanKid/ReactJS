import React, { Component } from 'react';
import Products from './Products';
import JumboTronComponent from './JumboTronComponent';
import UserForm from './UserForm';
import GitHub from './GitHub';

class App extends Component {
  render() {
    return (
      <div>

        {/* <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
          <Products />
        </JumboTronComponent> */}
        {/* <Products /> */}
         {/* <UserForm /> */}

        <GitHub />

      </div>
    );
  }
}
export default App;