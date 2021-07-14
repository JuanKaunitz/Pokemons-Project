import React from 'react';
import CardDetails from './CardDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { getPokeById } from '../redux/actions/Actions';

function Details() {    

    const dispatch = useDispatch();
    const getDetails = useSelector((state) => state.getDetails);       
    
        useEffect(() =>{           
        dispatch(getPokeById())           
    },) 

    return (
    <div>
        <CardDetails poke = {getDetails}>Know your Pokemon closer!!!</CardDetails>        
    </div>
    )
}

export default Details;