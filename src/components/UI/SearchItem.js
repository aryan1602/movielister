import React, { useContext } from 'react'
import '../../assets/search-item.css'
import ResultContext from '../../context/ResultContext'
import { useNavigate } from "react-router-dom";


const SearchItem = (props) => {

    const { setSelectedShowDetail } = useContext(ResultContext);
    const navigate = useNavigate();
   
    const clickHandler = async() =>{
        const url = ' https://api.tvmaze.com/lookup/shows?thetvdb=' + props.id;
        console.log(url);
        const response = await fetch(url);
        const data = await response.json();
        setSelectedShowDetail(data);
        console.log(data);
        localStorage.setItem('selectedShow', JSON.stringify(data))
        navigate('/detail');
        

    }

  return (
    
    <div onClick={clickHandler} className='searchItemDiv'>
        <figure>
            <img src = {props.imageUrl}/>
            <figcaption>
                <h2> {props.showTitle} </h2>
                <h3>Rating - {props.rating}</h3>
            </figcaption>
        </figure>
       
    </div>
  )
}

export default SearchItem