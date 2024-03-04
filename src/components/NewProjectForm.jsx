import React, { useState } from "react";
import postNewProject from "../api/post-newproject.js";
import { useNavigate } from "react-router-dom";

import "./Forms.css";

function NewProjectForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal : 0, 
    image: "",
   is_open: true, 
   date_created: new Date().toISOString(), 
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
    if (formData.title && formData.description && formData.goal && formData.image) {
      postNewProject(
       formData
      )
        .then((response) => {
          console.log(response);
          setSuccessMessage("Project created successfully!");
          navigate("/");
        })
        .catch((error) => {
          setError("Error submitting project: " + error.message);
        });
    } else {
      setError("All fields are required.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Create project title:</label>
          <input
            type="text"
            id="title"
            // value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
          />
        </div>

        <div>
          <label htmlFor="description">Enter project description:</label>
          <input
            type="text"
            id="description"
            // value={formData.description}
            onChange={handleChange}
            placeholder="Description"
          />
        </div>

        <div>
          <label htmlFor="goal">Project goal:</label>
          <input
            type="number" // Use type "number" for goal input
            id="goal"
            // value={formData.goal}
            onChange={handleChange}
            placeholder="Goal $"
          />
        </div>

        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            id="image"
            // value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
        </div>

        <button className="login-button" type="submit">Submit new project</button>
      </form>

      {error && <div>Error: {error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
}

export default NewProjectForm;
