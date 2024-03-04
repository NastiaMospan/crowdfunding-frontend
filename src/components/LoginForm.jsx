import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import {useState} from "react";
import "./Forms.css";
import {Link, } from "react-router-dom";


function LoginForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(
                credentials.username,
                credentials.password
                ).then((response) => {
                    window.localStorage.setItem("token", response.token);
                    navigate("/");
                });
            }
        };

    return (
        <>
       <form>
         <div>
           <label htmlFor="username">Username:</label>
           <input 
           type="text"
           id="username"
           placeholder="Enter username"
           onChange={handleChange}
           />

         </div>
         <div>
          <label htmlFor="password">Password:</label>
          <input 
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          />
         </div>

         <button className="login-button" type="submit" onClick={handleSubmit}>
         Login
         </button>

        </form>

<p>Dont have an account? Create one 
<a>
<Link className="navlink" to="/signup"> here </Link>
</a>
</p>
</>
    );

}



export default LoginForm;

