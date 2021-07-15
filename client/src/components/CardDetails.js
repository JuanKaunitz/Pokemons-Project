import React from 'react'
import './CardDetails.css';

function CardDetails({getDetails}) {
    return (
        <div className = "card-container">
            <h1>{getDetails.name}</h1>
            <h3>Pokemon`s number: {getDetails.id}</h3>
            <img className = "img-card" src= {getDetails.image}  alt = "img not found"/>
            <h3>Stats:</h3>  
              
                <h5>Life: {getDetails.life}</h5>
                <h5>Attack: {getDetails.attack}</h5>
                <h5>Defense: {getDetails.defense}</h5>
                <h5>Speed: {getDetails.speed}</h5>
            
            <h3>Height: {getDetails.height}</h3>
            <h3>Weight: {getDetails.weight}</h3>
            
            <h4>Types:</h4> 
            {
                getDetails.types && getDetails.types.map((el,i) => {
                    return <li key={i}>{el}</li>
                } )
            }
        </div>
    )
}

export default CardDetails;