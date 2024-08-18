import { Link, useOutletContext, useParams } from "react-router-dom";
import "../styles/recipe-info.css";

export default function Ingredients() {
  const { id } = useParams();
  const { desc, ingredients } = useOutletContext();

  return (
    <>
      <div className="recipe-info-container">
        <div className="recipe-info-header">
          <h3>Ingredients</h3>
          <Link to={`/recipe/${id}/instructions`} className="recipe-info-link">
            Instructions
          </Link>
          <p>{desc}</p>
        </div>
        {ingredients.map(({ raw_text, position }) => (
          <div className="recipe-info-content-container" key={position}>
            <p className="recipe-step">{position}</p>
            <p className="display-text">{raw_text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
