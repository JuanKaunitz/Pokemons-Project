import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';


export default function Pagination() {
    let dataLimit = 12;
    const getPokes = useSelector((state) => state.getPokes);
    const [pages] = useState(Math.round(getPokes.length / dataLimit));

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

    /* const paginate = (pageNumber) => setCurrentPage(pageNumber); */

    return (
        <div>
          <button onClick={goToPreviousPage} >Prev</button> 
           
          <button onClick={goToNextPage} >Next</button>

          {getPaginatedData().map(poke => (   
          <ul key = {poke.id}> 
            <Link  to = {`/details/${poke.id}`} /* mostrar el res de getDetails */ >          
              <Card poke = {poke} key = {poke.id}/>
            </Link>
          </ul>))}        
        </div>
    )
}