import React from 'react';
import './Home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getAllPokemons, searchQueryPokes } from '../redux/actions/Actions';
import { Link } from 'react-router-dom';

import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState } from 'react';
import Pagination from './Pagination';


function Home() {

  const dispatch = useDispatch();
  const getPokes = useSelector((state) => state.getPokes);
  const searchPoke = useSelector((state) => state.searchPoke);
  const [name, setName] = useState("");
  const [search, setSearch] = useState(false);
  const [displayResults, setDisplayResults] = useState(getPokes)

  async function searchPokemon(name) {
    await dispatch(searchQueryPokes(name))        
  }


  useEffect(() =>{
    if(search) {
      searchPokemon(name)      
    } else {
      dispatch(getAllPokemons());
    } 
  },[search]) 

  
  return(

  <div className='Home' >
    <SearchBar setSearch={setSearch} setName={setName} ></SearchBar>   
    
    <ul>
    <h2>Look for your favourite Pokemon</h2>
      {  
        search ? 
          <Link to={`/details/${searchPoke.id}`} >          
            <Card poke = {searchPoke} key = {searchPoke.id}/>        
          </Link> 
        :      
        (getPokes.length > 0 ? <Pagination></Pagination> : <h1>Loading ...</h1>)
      }
    </ul> 
  </div>
  )
}

export default Home;


