import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const FetchData = () => {

  const [data, setData] = useState([]);

  // how to use get data using api
  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // Handle the response data
      // setData(response.data);
      console.log(response);
    })
    .catch(error => {
      // Handle error if request fails
      console.error('Error fetching data:', error);
    });
}, []); 

  return (
    <>

    </>
  )
}

export default FetchData
