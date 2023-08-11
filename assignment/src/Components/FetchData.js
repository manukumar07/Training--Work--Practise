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
      setData(response.data);
      // console.log(response);
    })
    .catch(error => {
      // Handle error if request fails
      console.error('Error fetching data:', error);
    });
}, []); 

  return (
    <>
        <div className='container'>
        <div className='mt-5'>
            <h3>Fetch the Api with using axios</h3>
            <table>
              <tr>
                <th>ID:</th>
                <th>Name:</th>
                <th>Email:</th>
                 <th>Address:</th>
                {/* <th>Zipcode:</th> */}
              </tr>
              <tbody>
                {
                  data.map((user,index)=>{
                    return <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                     <td>{user.address.zipcode}</td>
                    </tr>
                  })
                }
              </tbody>
            </table>
        </div>
        </div>
    </>
  )
}

export default FetchData
