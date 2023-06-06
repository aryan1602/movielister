import React, { useContext, useState } from 'react'
import ResultContext from '../context/ResultContext'
import '../assets/show-detail.css'
import { Genre } from './UI/Genre'
import Form from './UI/Form'
import { useNavigate } from 'react-router-dom'



const ShowDetail = () => {
  const navigate = useNavigate();
  const { selectedShowDetail } = useContext(ResultContext);
  console.log(selectedShowDetail);
  const htmlString = selectedShowDetail.summary;
  const clickHandler = () =>{
      navigate('/book');
  }
  const goBackHandler = () => {
    navigate('/result');
  }
  return (
    
    <div className='showDetail'>
        <button onClick={goBackHandler} className='back'>Go Back</button>
        <h2>{selectedShowDetail.name}</h2>
        <p>{selectedShowDetail.premiered}</p>
        <div className='imageContainer'>
            {selectedShowDetail.image && <img src={selectedShowDetail.image.medium}></img>}
            <button onClick={clickHandler}><b><span>Book Tickets</span></b></button>
            
        </div>
        <div className = "genreContainer">
            {selectedShowDetail.genres.map((genre, i) => {
              return <Genre key={i}>{genre}</Genre>
            })}
            
        </div>
         <div dangerouslySetInnerHTML={{__html: htmlString}} />
     
        
    </div>
  )
}

export default ShowDetail