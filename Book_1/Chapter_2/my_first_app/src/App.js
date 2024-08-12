import React, { Component } from 'react'; // Importing React and Component from the 'react' library
import Products from './Products'; // Import the Products component from a local file named 'Products'

class App extends Component { // Defining a class component named App which extends the Component class
  render() { // Defining the render method which returns the JSX to be rendered
    return (
      <div> {/* JSX syntax for a div element */}
        <h1> {/* JSX syntax for a heading level 1 element */}
          My First React App! {/* Text content */}     
        <Products /> {/* Render the Products component */}
        </h1>
      </div>
    );
  }
}

export default App; // Exporting the App component as a default export
