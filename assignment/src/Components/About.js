import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';

const About = () => {
  
  const Location = useLocation();
  const navigate = useNavigate();

  const handleClick =() =>{
    navigate('/')
  }

  return (
    <>
         <div>
         {Location.state ==null?'':
         <h5 >
         {Location.state.m.name}
         </h5>}
         {Location.state ==null?'':
         <h5 >
         {Location.state.m.email}
         </h5>}
         {Location.state ==null?'':
         <h5 >
         {Location.state.m.password}
         </h5>}
         <button onClick={()=>handleClick()} className='btn1'>Back-Here!</button>

        </div>
    </>
  )
};
export default About;
