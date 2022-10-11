import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';

//imported components and pages
import Nav from './components/nav/Nav';
import Intro from './components/intro/Intro';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';

function App() {
  return (
    <Router>
      <div className="app">
        <div className='nav-bar'> <Nav />  </div>
          
           <Intro />
           <ContactMe />
          <AboutMe /> 
          <Routes>

          </Routes>
      </div>
    </Router>
    );
    
}

export default App;
