import React, { useState } from "react";
import "./Home.css";
import { useNavigate} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Home = () => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [state, setState] = useState({
    name:"",
    email: "",
    password: ""
  });
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

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
  // const Navigate =useNavigate();
  // const handleClick =() =>{
  //   Navigate(-1);
  //   state:{
  //   }
  // }
  const navigate = useNavigate();

    const handleNavigation = () => {
        const propsToPass = {
            name:"",
            email:"",
            password:""
        };
        navigate('/about', { state: propsToPass });
    };
  return (
    
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
            type={passwordShown ? "password" : "text"}
            name="password"
            className="form-input"
            value={state.password}
            autoComplete="off"
            placeholder="Enter your password:-"
            onChange={handleChange}
            onClick={togglePasswordVisiblity} /> {eye}{""}
          <button type="submit" className="submit">Submit</button>
          <button onClick={handleNavigation}>Go to about page</button>
       </form>
       </div>
  )
}

export default Home;



