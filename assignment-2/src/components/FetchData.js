// fetch data using fetch method

import React from 'react'
import {useState} from "react-router-dom";

const FetchData = () => {
    const [data,setData]=useState([]);

    fetch('')
    .then((respone) => respone.json())
    .then (())

  return (
    <>
        <h2>Fetch data using Fetch Method....</h2>
        
    
    </>
  )
}

export default FetchData;
