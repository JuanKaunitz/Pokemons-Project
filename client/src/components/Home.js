import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllPokemons, searchQueryPokes } from '../redux/actions/Actions';
import { Link } from 'react-router-dom';

import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState } from 'react';

function Home() {

  const dispatch = useDispatch();
  const getPokes = useSelector((state) => state.getPokes);
  const [name, setName] = useState("");
  const [search, setSearch] = useState("");

    useEffect(() =>{
    if(search) {
      //console.log('ENTRE', search);
      dispatch(searchQueryPokes(search))
    } else {
      dispatch(getAllPokemons());
    } 
  },[search]) 

  return(
    <div className='Home' >
     <SearchBar setSearch={setSearch} setName={setName}></SearchBar> 
     {/* <SearchBar onChange = {(value) => setName(value) }/> */}
    {/* <button onClick = {() => setSearch(name)}>Search</button> */}
      <ul>
      <h2>Look for your favourite Pokemon</h2>
      {
        getPokes.length > 0 ? getPokes.map(poke => (   
        <li key = {poke.id}> 
        <Link  to = {`/details/${poke.id}`}><Card poke = {poke} key = {poke.id}/></Link>
        </li>
        )): <h1>Loading ...</h1>
      }
      </ul> 
    </div>
  )
}

export default Home;
/* function home() {
  return (
    <div className="Home">
      <h1>Look for your favourite Pokemon</h1>     
      
        
        <br></br>
      <button >Prev</button> 
      <button >Next</button>
    </div>
  );
} */
