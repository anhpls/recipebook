import "../styles/recipe-header.css";

export default function NutritionalFacts({ fact }) {
  const { Icon } = fact;
  return (
    <>
      <div className="recipe-fact-container">
        <Icon className="icons" />
        <h3>{fact.amount}</h3>
        <p>{fact.category}</p>
      </div>
    </>
  );
}
