import React, { useState } from "react";
import postPledge from "../api/post-pledge.js";
import { useNavigate } from "react-router-dom";

import "./Forms.css";

function PledgeForm(props) {
    const { projectId } = props;
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    amount: 0,
    comment:"",
    anonymous:false,
    project: projectId,
    supporter:1,


   
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
    console.log(formData);
    event.preventDefault();
    console.log(typeof formData.amount)
    if (formData.amount && formData.comment ) {
      postPledge(
        {amount: Number(formData.amount),...formData}
      )
        .then((response) => {
          console.log(response);
          setSuccessMessage("Pledge created successfully!");
          navigate("/");
        })
        .catch((error) => {
          setError("Error submitting pledge: " + error.message);
        });
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Enter amount:</label>
          <input
            type="number"
            id="amount"
            onChange={handleChange}
            placeholder="Enter amount"
          />
        </div>

        <div>
          <label htmlFor="description">Enter comment:</label>
          <input
            type="text"
            id="comment"
            onChange={handleChange}
            placeholder="comment"
          />
        </div>


        <button className="login-button" type="submit">Submit new pledge</button>
      </form>

      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

export default PledgeForm;
