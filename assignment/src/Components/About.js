import React from 'react'
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const passedProps = location.state;

  return (
    <>
         <div>
            <h1>Welcome to About Page</h1>
            <p>{passedProps.name}</p>
            <p>{passedProps.email}</p>
            <p>{passedProps.password}</p>
        </div>
    </>
  )
};
export default About;
