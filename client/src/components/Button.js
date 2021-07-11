import React  from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function button(route) {
  return (    
    <nav>
      <Link to={route}>          
      </Link>        
    </nav>    
  );
};

export default button;