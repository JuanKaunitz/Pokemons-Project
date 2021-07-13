import React from 'react';
import './Landing.css';
import img from './pokemones.jpg';
import { Link } from 'react-router-dom';

function Landing() {  
  
  return (        
    <div className="Landing" style={{backgroundImage: `url(${img})`, minHeight:'100%', height:'100%', minWidth: '100%', position:'fixed'}}  >
        <link rel="stylesheet" href="Landing.css"></link>
        
        <h1>Welcome to the greatest PokemonApp!!!</h1>
        <br></br>
        <h3>Created by: Juan Kaunitz</h3>  
        <button><Link to='/home'>Home</Link></button>      
    </div>    
  );
}

export default Landing;





