import React, { useState } from 'react'
import "./Home.css";
const Home = () => {
  
  const[inputValue,setChangeValue]=useState({
    name:"",
    email:"",
    password:"",

  });

  const handleChange=(e) =>{
    setChangeValue({
      [e.target.name]: e.target.value
  })
};
const handleSubmit =(e)=>{
  e.preventDefault();
  console.log(inputValue);
};
  return (
    <>
    <form onSubmit={handleSubmit}>

        <div className='form'>
      
        <label className='lb'>Enter Your Name</label>
        <input type='text'
         name='name'
         value={inputValue}
         autoComplete='off' 
         onChange={handleChange}
         placeholder='Enter your Name:- value='
          />
        <label className='lb'>Enter your Email:</label>
         <input type='email'
         name='email'
          value={inputValue}
          autoComplete='off'
          placeholder='Enter your email:-'
          onChange={handleChange}
           />
         <label className='lb'>Enter your Password:</label>
         <input type='password' 
         name='password'
          value={inputValue}
          autoComplete='off'
          placeholder='Enter your password:-'
          onChange={handleChange}
           />
         <button type="submit" className='submit'>Submit!</button>
     
        </div>
    </form>
    </>
  )
}

export default Home




