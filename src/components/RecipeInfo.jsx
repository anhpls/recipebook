import { Outlet } from "react-router-dom";
import "../styles/recipe-info.css";

export default function RecipeInfo({ instructions, image, desc, ingredients }) {
  return (
    <>
      <div className="recipe-info">
        <Outlet context={{ instructions, desc, ingredients }} />
        <div className="image-container">
          <img className="recipe-image" src={image} alt="" />
        </div>
      </div>
    </>
  );
}
