import React from 'react';
import CardDetails from './CardDetails';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { getPokeById, clearPoke } from '../redux/actions/Actions';

function Details() {     
    
    const dispatch = useDispatch();
    const getDetails = useSelector((state) => state.getDetails);       
    let { id }  = useParams();
    
        useEffect( () => {  
            console.log('GET DETAILS: ', getDetails)
        if(id) {
            dispatch(getPokeById(id))           
        } else {
            dispatch(clearPoke())
        }           
    },[id]) 

    return (
    <div>
     {/* { getDetails && <CardDetails getDetails = {getDetails[0]} key={getDetails[0].id}>Know your Pokemon closer!!!</CardDetails> }  */}      
    </div>
    )
}

export default Details;