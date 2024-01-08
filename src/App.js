import {useState} from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Team from './Team';
import ContactUs from './ContactUs';

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {
  return <Router>
    <nav>

    <Link to='/'className='link'>Home</Link>
    <Link to='/about'className='link'>About</Link>
    <Link to='/team'className='link'>Team</Link>
    <Link to='/contact us'className='link'>Contact us</Link>
    </nav>
    <Routes>

      <Route path='/'element={<Home/>}/>
      <Route path='/about'element={<About/>}/>
      <Route path='/team'element={<Team/>}/>
      <Route path='/contact us'element={<ContactUs/>}/>

    </Routes>
    </Router>
  
}



export default App;
