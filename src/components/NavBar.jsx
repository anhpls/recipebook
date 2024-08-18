import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav>
      <Link to="/home" className="nav-link">
        Home
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link to="/#about-info" className="nav-link">
        About
      </Link>
      <div className="logo-container">
        <Link to="/home">
          <img src={logo} alt="AH signature" className="logo-nav"></img>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
