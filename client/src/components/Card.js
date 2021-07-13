import React from 'react'
import './Card.css';

function Card({poke}) {
    return (
        <div className = "card-container">
            <h1>{poke.name}</h1>
            <img className = "img-card" src= {poke.image} alt = "img not found"/>
            <h4>Types:</h4> 
            {
                poke.type && poke.type.map((el,i) => {
                    return <li key={i}>{el.name}</li>
                } )
            }
        </div>
    )
}

export default Card;