import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Forms.css";

import postSignup from "../api/sign-up.js";

function SignupForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    if (formData.username && formData.password && formData.email) {
        postSignup(
            formData.username,
            formData.password,
            formData.email
            ).then((response) => {
              console.log(response)
                navigate("/");
            });
        }
    };

  return (
    <div>
      <form >
        <div>
          <label htmlFor="username">Create your username:</label>
          <input
            type="text"
            id="username"
            
            onChange={handleChange}
            placeholder="Enter username"
          />
        </div>

        <div>
          <label htmlFor="password">Create your password:</label>
          <input
            type="password"
            id="password"
            
            onChange={handleChange}
            placeholder="Password"
          />
        </div>

        <div>
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
           
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <button className="login-button"  type="submit" onClick={handleSubmit}>Sign up</button>
      </form>

      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

export default SignupForm;
