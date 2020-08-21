import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Resume from './Components/Resume/Resume'
import Main from './Components/Main/Main'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <Resume/>
    </div>
  );
}

export default App;
