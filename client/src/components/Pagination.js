import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './Pagination.css';

export default function Pagination() {
  let dataLimit = 12;

  const getPokes = useSelector((state) => state.getPokes);
  const [pages] = useState(Math.ceil(getPokes.length / dataLimit));

  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
      setCurrentPage((pages) => pages + 1)
  }

  function goToPreviousPage() {
      setCurrentPage((pages) => pages - 1)
  }

  const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit
      const endIndex = startIndex + dataLimit
      return getPokes.slice(startIndex, endIndex)
  };        

  return (
      <div>
        <div >
          <button className={`${currentPage === 1 ? 'disabled' : ''}`} onClick={goToPreviousPage} >Prev</button> 
          <h5 className='box'>Pag: {currentPage}</h5>           
          <button className={`${currentPage === Math.ceil(getPokes.length / dataLimit) ? 'disabled' : ''}`} onClick={goToNextPage} >Next</button>
        </div>

        {getPaginatedData().map(poke => (   
        <ul key = {poke.id}> 
          <Link  to = {`/details/${poke.id}`} /* mostrar el res de getDetails */ >          
            <Card poke = {poke} key = {poke.id}/>
          </Link>
        </ul>))}        
      </div>
  )
}