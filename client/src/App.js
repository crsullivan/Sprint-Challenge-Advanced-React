import React from 'react';
import './App.css';
import Class from './Class';
import Navbar from './NavBar';

function App() {
  return (
     <> 
      <header className="App">
        <Navbar />
      </header>
      <div>
        <Class />
      </div>
    </>
  );
}

export default App;
