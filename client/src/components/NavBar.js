import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
      <div>        
        <NavLink to="/home" activeClassName="active" >Home</NavLink>
        <NavLink to="/newpokemon" activeClassName="active">Create your Pokemon</NavLink>
      </div>
    );
  }
  {/* <NavLink to="/details" activeClassName="active" >Details</NavLink> */}
