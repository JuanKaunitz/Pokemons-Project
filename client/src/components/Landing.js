import React from 'react';
import './Landing.css';
import img from './pokemones.jpg';
import { Link } from 'react-router-dom';
import Button from './Button'

/* <div className='Login-component'></div> */
function Landing() {  
  return (        
    <div className="Landing" style={{backgroundImage: `url(${img})`}}  >
        <link rel="stylesheet" href="Landing.css"></link>
        
        <h1>Welcome to the greatest PokemonApp!!!</h1>
        <br></br>
        <h3>Created by: Juan Kaunitz</h3>        
    </div>    
  );
}

export default Landing;





