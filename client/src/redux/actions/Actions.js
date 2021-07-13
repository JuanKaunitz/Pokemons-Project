import {
    GET_ALL_POKEMONS,
    SEARCH_POKE,
    GET_TYPE,
    GET_POKE_ID,
    ADD_NEW_POKE
} from '../constants';

import axios from 'axios';

//Obteniendo todos los pokemons.
export const getAllPokemons = () => async (dispatch) => {
    console.log('getAllPokemons')
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
    console.log('searchQueryPokes')
    try {
        const res = await axios.get(`http://localhost:3001/pokemons?search=${name}`);
        // console.log('RUTAAA', res);
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
        console.log(poke);
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
