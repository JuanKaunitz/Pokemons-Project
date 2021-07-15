import React from 'react';
import CardDetails from './CardDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getPokeById, clearPoke } from '../redux/actions/Actions';

function Details() {     
    
    const dispatch = useDispatch();
    const getDetails = useSelector((state) => state.getDetails);       
    const { id } = useParams();
    
        useEffect( () => {  
        if(id) {
            dispatch(getPokeById(id))           
        } return () => {
            dispatch(clearPoke())
        }           
    },[id]) 

    return (
    <div>
        <CardDetails getDetails = {getDetails} key={getDetails.id}>Know your Pokemon closer!!!</CardDetails>        
    </div>
    )
}

export default Details;