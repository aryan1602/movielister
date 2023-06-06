import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import '../assets/search-bar.css'
import ResultContext from '../context/ResultContext';


export const Search =  () => {
    const navigate = useNavigate();
    
    const { results, setResults, userSearch, setUserSearch } = useContext(ResultContext);


    const submitHandler = async (e) =>{
        e.preventDefault();
        const url = 'https://api.tvmaze.com/search/shows?q=' + userSearch;
        localStorage.setItem('userSearch', userSearch);
        const response = await fetch(url);
        const data = await response.json();
        setResults(data);
        localStorage.setItem('results', JSON.stringify(data));
        navigate('/result');

    }
    const changeHandler = (e)=>{
        setUserSearch(e.target.value);
    }
  return (
    <div className="wrap">
        <form className="search" onSubmit={submitHandler}>
            <input onChange = {changeHandler} type="text" className="searchTerm" placeholder='Enter the show you want to look for'/>
            <button className="searchButton" type="submit" >Go</button>
        </form>
    </div>
  )
}
