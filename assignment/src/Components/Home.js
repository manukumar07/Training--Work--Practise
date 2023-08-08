import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [state, setState] = useState({
    name:"",
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };      
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('name:', name);
    // console.log('email:', email);
    // console.log('Password:', password);
    console.log(state);
  };
  return (
    <>
      <div className="form">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="lb">Enter Your Name:-</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={state.name}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter your Name:- "
            required
          />
          <label className="lb">Enter your Email:-</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={state.email}
            autoComplete="off"
            placeholder="Enter your email:-"
            onChange={handleChange}
            required
          />
          <label className="lb">Enter your Password:-</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={state.password}
            autoComplete="off"
            placeholder="Enter your password:-"
            onChange={handleChange}
            required
          />
          <button type="submit" className="submit">
            Submit!
          </button>
        </form>
      </div>
    </>
  );
};

export default Home;


// useEffect(()=>{

// },[]) // callback function 
// it uses for re-rendering

