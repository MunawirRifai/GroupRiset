import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Index from './sections/Index'
import NavLink from './sections/NavLink'
import { NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div>
      <div className='main-wrapper'>
        <Navbar />
        <NavLink />
        <Index />
      </div>
    </div>
  );
}

export default App;
