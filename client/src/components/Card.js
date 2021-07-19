import React from 'react'
import './Card.css';

function Card({poke}) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{poke.name}</h1>
                <div  className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                    <img className = "img-card" src= {poke.image} alt = "img not found"/>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        <h4>Types:</h4> 
                        {
                            poke.types && poke.types.map((el,i) => {
                                return <li key={i}>{el.name}</li>
                            } )
                        }
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Card;