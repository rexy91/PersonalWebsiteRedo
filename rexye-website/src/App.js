import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'

import Main from './Components/Main/Main'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Projects from './Components/Projects/Projects'
import Blogs from './Components/Blogs/Blogs'
import Contact from './Components/Contact/Contact'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Main/>
        <About/>
        <Resume/>
        <Projects/>
        <Blogs/>
        <Contact/>

    </div>
  );
}

export default App;
