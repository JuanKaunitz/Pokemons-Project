import React from 'react';
import { Link } from 'react-router-dom';
//import Button from './Button.jsx'

import './Home.css';

function home() {
  return (
    <div className="Home">
      <h1>Look for your favourite Pokemon</h1>     
      
        
        <br></br>
      <button >Prev</button> 
      <button >Next</button>
    </div>
  );
}

export default home;