// fetch data using fetch method

import React from 'react'
import {useState} from "react-router-dom";

const FetchData = () => {
    const [data,setData]=useState([]);
    // fetch("https://dummyjson.com/products/")
    .then((response)=>response.json())

    .then ((info)=>{
        setData(info);
    });
  return (
    <>
        <h2>Fetch data using Fetch Method....</h2>
        
    
    </>
  )
}

export default FetchData
