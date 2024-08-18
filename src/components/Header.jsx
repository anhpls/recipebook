import { useState } from "react";
import ingredients from "../assets/ingredients.png";
import { useSearchParams } from "react-router-dom";

function Header({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [_, setSearchParams] = useSearchParams();

  const handleClick = () => {
    handleSearch(searchTerm);
    if (searchTerm) {
      setSearchParams({
        search: searchTerm,
      });
    }
    setSearchTerm("");
  };

  return (
    <>
      <header className="main-header">
        <div className="header-text-container">
          <h1 className="header-title">
            Explore <span>Enticing</span> Recipes
          </h1>
          <p className="header-description">
            Don't know what to make for dinner? Let us handle the hard part of
            figuring out what ingredients melt together to create mouthwatering
            dishes that will impress your family and friends. With our curated
            collection of delicious recipes, you'll find the perfect dishes for
            every occasion—whether it's a cozy family meal or an impressive
            dinner party. Dive into a culinary adventure and make meal planning
            a breeze! 
          </p>
          <hr className="header-hr" />
          <div className="input-search">
            <input
              type="text"
              className="header-input"
              placeholder="Find a recipe for..."
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
              value={searchTerm}
            />
            <button className="search-button" onClick={handleClick}>
              Browse
            </button>
          </div>
        </div>
      </header>
      <img src={ingredients} alt="food stock" className="main-image" />
    </>
  );
}

export default Header;
