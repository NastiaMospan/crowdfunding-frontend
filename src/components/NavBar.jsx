import {Link, Outlet} from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return(
        <div >
         <nav id="navbar">
        <ul>
         <li className="navlink"><Link to="/">Home</Link></li>
         <li className="navlink"><Link to="/login">Log In</Link></li>
         <li className="navlink"><Link to="/signup">Sign Up</Link></li>
           
         </ul>
         </nav>
         <Outlet />
        
        </div>
    );
}

export default NavBar;