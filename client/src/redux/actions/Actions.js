import {
    GET_ALL_POKEMONS,
    SEARCH_POKE,
    GET_TYPE,
    GET_POKE_ID,
    ADD_NEW_POKE,
    ORDER_ASC_ATTACK,
    ORDER_ASC_NAME,
    ORDER_DESC_ATTACK, 
    ORDER_DESC_NAME   
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
export const orderBy = (sort) => (dispatch, getState) => {
    const orderBy = getState().orderBy.slice();
    const pokes = getState().getPokes.slice();
    const filterPokes = getState().filterPokes.slice();
  
    if (orderBy === "Order By") {
      if (sort === "highest") {
        const pokesOrder = pokes.sort((a, b) => a.attack - b.attack);
        dispatch({
          type: ORDER_ASC_ATTACK,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
      if (sort === "az") {
        const pokesOrder = pokes.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_ASC_NAME,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
    } else {
      if (sort === "highest") {
        const pokesOrder = filterPokes.sort((a, b) => a.rating - b.rating);
        dispatch({
          type: ORDER_ASC_ATTACK,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
      if (sort === "az") {
        const pokesOrder = filterPokes.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_ASC_NAME,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
    }
  };
  
  export const orderByDesc = (sort) => (dispatch, getState) => {
    const orderBy = getState().orderBy.slice();
    const pokes = getState().getPokes;
    const filterPokes = getState().filterPokes;
  
    if (orderBy === "Order By") {
      if (sort === "lowest") {
        const pokesOrder = pokes.sort((a, b) => b.rating - a.rating);
        dispatch({
          type: ORDER_DESC_ATTACK,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
      if (sort === "za") {
        const pokesOrder = pokes.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_DESC_NAME,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
    } else {
      if (sort === "lowest") {
        const pokesOrder = filterPokes.sort((a, b) => b.rating - a.rating);
        dispatch({
          type: ORDER_DESC_ATTACK,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
      if (sort === "za") {
        const pokesOrder = filterPokes.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        dispatch({
          type: ORDER_DESC_NAME,
          payload: {
            pokesOrder,
            name: sort,
          },
        });
      }
    }
  };
