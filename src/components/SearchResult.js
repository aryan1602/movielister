import React, { useContext } from 'react'
import SearchItem from './UI/SearchItem'
import '../assets/search-result.css'
import ResultContext from '../context/ResultContext'
import { useNavigate } from 'react-router-dom'


const SearchResult = () => {
    const {results, userSearch } = useContext(ResultContext);
    const navigate = useNavigate();
    const goBackHandler = () =>{
      navigate('/');
    }
    
  return (
    <>
    <button onClick={goBackHandler} className='back'>Back to Search</button>
    <h1> Showing results for "{userSearch}"</h1>
    <div className='searchResult'>
       { results.map((result) => {
            console.log(result);
            return <SearchItem id ={result.show.externals.thetvdb} key = {result.show.id} imageUrl={result.show.image && result.show.image.medium} showTitle={result.show.name} rating={result.show.rating.average}/>
        })}
    </div>
    </>
    
  )
}

export default SearchResult