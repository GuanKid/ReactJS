// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react'; // Importing React and Component from the 'react' library

class App extends Component { // Defining a class component named App which extends the Component class
  render() { // Defining the render method which returns the JSX to be rendered
    return (
      <div> {/* JSX syntax for a div element */}
        <h1> {/* JSX syntax for a heading level 1 element */}
          My First React App! {/* Text content */}
        </h1>
      </div>
    );
  }
}

export default App; // Exporting the App component as a default export
