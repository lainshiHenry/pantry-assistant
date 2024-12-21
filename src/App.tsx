import React from 'react';
import './App.css';
import Button from './components/Button'
import Link from './components/Link';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Link linkTextString='Sample link here' classNameString='App-link' />
        <Button />
      </header>
    </div>
  );
}

export default App;
