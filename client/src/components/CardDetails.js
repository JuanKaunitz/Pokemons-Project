import React from 'react'
import './Card.css';
import { useSelector } from 'react-redux';

const getDetails = useSelector((state) => state.getDetails);


function CardDetails() {
    return (
        <div className = "card-container">
            <h1>{getDetails.name}</h1>
            <h3>Pokemon`s number: {getDetails.id}</h3>
            <img className = "img-card" src= {getDetails.image} alt = "img not found"/>
            <li>Stats: 
                <br></br>
                <h3>{getDetails.life}</h3>
                <h3>{getDetails.attack}</h3>
                <h3>{getDetails.defense}</h3>
                <h3>{getDetails.speed}</h3>
            </li>
            <h3>Height: {getDetails.height}</h3>
            <h3>Weight: {getDetails.weight}</h3>
            <bk></bk>
            <h4>Types:</h4> 
            {
                getDetails.type && getDetails.type.map((el,i) => {
                    return <li key={i}>{el.name}</li>
                } )
            }
        </div>
    )
}

export default CardDetails;