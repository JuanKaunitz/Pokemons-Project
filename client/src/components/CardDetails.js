import React from 'react'
import './CardDetails.css';

function CardDetails({getDetails}) {
    return (
        <div className = "card-container">
            <h1>{getDetails.name}</h1>
            <h3>Pokemon`s number: {getDetails.id}</h3>
            <img className = "img-card" src= {getDetails.image} alt = "img not found"/>
            <li>Stats: 
                <br></br>
                <h3>Life: {getDetails.life}</h3>
                <h3>Attack: {getDetails.attack}</h3>
                <h3>Defense: {getDetails.defense}</h3>
                <h3>Speed: {getDetails.speed}</h3>
            </li>
            <h3>Height: {getDetails.height}</h3>
            <h3>Weight: {getDetails.weight}</h3>
            <br></br>
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