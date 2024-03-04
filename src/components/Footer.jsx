import {Link, Outlet} from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div id="footer-content">
        <h2>Follow us on Social Media</h2>
      </div>

      <div >
        <ul id="footer-social">
          <a className="footlink" href="#">Facebook</a>
          <a className="footlink" href="#">Linkedin</a>
          <a className="footlink" href="#">Twitter</a>
        </ul>
      </div>

    </footer>
  );
}

export default Footer;
  