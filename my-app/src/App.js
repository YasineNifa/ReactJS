import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/greet'
// responsable for the html displayed in the browser
// it is the view
// Component are just javascript
// Functional Component are just javascript functions
// They can optionally receive an object of properties props
// and return HTML (know as JSX) which describes the UI

function App() {
  return (
    <div className="App">
      <Greet />
    </div>
  );
}

export default App;


