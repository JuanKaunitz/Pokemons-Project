import {
    GET_ALL_POKEMONS,
    SEARCH_POKE,
    GET_TYPE,
    GET_POKE_ID,
    ADD_NEW_POKE,    
    FILTER, 
    FILTER_MINE  
} from '../constants';

import axios from 'axios';

//Obteniendo todos los pokemons.
export const getAllPokemons = () => async (dispatch) => {
    
   try {
       const res = await axios.get("http://localhost:3001/pokemons");
       dispatch({
           type: GET_ALL_POKEMONS,
           payload: res.data
       });
   } catch (err) {
       console.log(err)
   }
}

//Buscar pokemons por query.
export const searchQueryPokes = (name) => async (dispatch) => {
    
    try {
        const res = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
        
        dispatch({
            type: SEARCH_POKE,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 }

 //Obteniendo types.
 export const getType = () => async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:3001/types");
        dispatch({
            type: GET_TYPE,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 }

 //Obteniendo juegos por ID.
 export const getPokeById = (id) => async (dispatch) => {
     
    try {        
        const res = await axios.get(`http://localhost:3001/pokemons/${id}`);  
        console.log('DATA: ',res.data)      
        dispatch({
            type: GET_POKE_ID,
            payload: res.data
        });
        
    } catch (err) {
      console.log(err)
    }
 }

//Creando un nuevo juego.
export const postPoke = (poke) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:3001/newPokemon", poke);     
        console.log(res.data);

        dispatch({
            type: ADD_NEW_POKE,
            payload: res.data
        });
    } catch (err) {
        console.log(err)
    }
 }

 //Limpiando el delay del game.
 export function clearPoke() {
     return {
         type: GET_POKE_ID,
         payload: undefined
     }
 }

 // ORDENAMIENTO ASCENDENTE Y DESCENDENTE RATING Y NAME
export const orderBy = (sort) => (dispatch) => {  
    //console.log(sort)    
    dispatch({
        type: sort,        
      })    
  };

  export const filterBy = (filter) => (dispatch) => {  
    //console.log('QUE ESTAMOS BUSCANDO: ',filter, typeof(filter))    
    dispatch({
        type: FILTER, 
        payload: filter       
      })    
  };

  export const filterMine = (filter) => (dispatch) => {  
    console.log('QUE ESTAMOS BUSCANDO: ',filter)    
    dispatch({
        type: FILTER_MINE, 
        payload: filter       
      })    
  };
  
  
