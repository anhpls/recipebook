import { useNavigate } from "react-router-dom";
import "../styles/Cards.css";
function Card({ recipe }) {
  const { id, name, thumbnail_url, topics, total_time_minutes } = recipe;

  const navigate = useNavigate();

  const handleNavRedirect = () => {
    navigate(`/recipe/${id}/instructions`);
  };

  return (
    <div className="card-link" onClick={handleNavRedirect}>
      <div
        className={`individual-card ${
          total_time_minutes ? "0" || "null" : "noInfo"
        }`}
        key={id}
      >
        <div className="imageContainer">
          <img src={thumbnail_url} alt="" className="card-image" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{name}</h3>
          </div>
          <div className="card-info">
            <div className="tag">
              {topics.length > 0 ? <p>{topics[0].name}</p> : null}
            </div>
            {total_time_minutes ? (
              <p className="time-text">{total_time_minutes} mins</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
