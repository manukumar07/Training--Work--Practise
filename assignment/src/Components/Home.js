import React, { useState } from "react";
import "./Home.css";
const Home = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
    setEmail(event.target.value);
    setPassword(event.target.value);

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('name:', name);
    console.log('email:', email);
    console.log('Password:', password);
  };
  return (
    <>
      <div className="form">
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="lb">Enter Your Name</label>
          <input
            type="text"
            name="name"
            className="form-input"
            value={name}
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter your Name:- value="
            required
          />
          <label className="lb">Enter your Email:</label>
          <input
            type="email"
            name="email"
            className="form-input"
            value={email}
            autoComplete="off"
            placeholder="Enter your email:-"
            onChange={handleChange}
            required
          />
          <label className="lb">Enter your Password:</label>
          <input
            type="password"
            name="password"
            className="form-input"
            value={password}
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
