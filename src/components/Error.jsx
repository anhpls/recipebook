import { Link } from "react-router-dom";
import errorpic from "../assets/errorpic.png";
import "../styles/Error.css";

export default function Error({ message, explanation }) {
  return (
    <div className="not-found-container">
      <img src={errorpic} className="not-found-image" alt="" />
      <h1 className="not-found-header">{message ? message : "Uh Oh!"}</h1>
      <p>{explanation ? explanation : "Something went wrong :( "}</p>
      <Link to="/home" className="return-to-home-link">
        Return to Home
      </Link>
    </div>
  );
}
