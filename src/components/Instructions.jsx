import { Link, useParams, useOutletContext, useOutlet } from "react-router-dom";
import "../styles/recipe-info.css";

export default function Instructions() {
  const { id } = useParams();
  const { instructions, desc } = useOutletContext();

  return (
    <>
      <div className="recipe-info">
        <div className="recipe-info-container">
          <div className="recipe-info-header">
            <h3>Instructions</h3>
            <Link to={`/recipe/${id}/ingredients`} className="recipe-info-link">
              Ingredients
            </Link>
            <p>{desc}</p>
          </div>
          {instructions.map(({ display_text, position }) => (
            <div className="recipe-info-content-container" key={position}>
              <p className="recipe-step">{position}</p>
              <p className="display-text">{display_text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
