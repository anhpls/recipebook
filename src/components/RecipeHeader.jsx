import NutritionalFacts from "./NutritionalFacts";
import "../styles/recipe-header.css";
import { AiOutlineFire } from "react-icons/ai";
import { CiWheat } from "react-icons/ci";
import { PiCheese } from "react-icons/pi";
import { GiSteak } from "react-icons/gi";
import { LuCakeSlice } from "react-icons/lu";

export default function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts.calories,
      category: "calories",
      Icon: AiOutlineFire,
    },
    {
      id: 2,
      amount: nutritionalFacts.carbohydrates,
      category: "carbs",
      Icon: CiWheat,
    },
    {
      id: 3,
      amount: nutritionalFacts.fat,
      category: "fats",
      Icon: PiCheese,
    },
    {
      id: 4,
      amount: nutritionalFacts.protein,
      category: "proteins",
      Icon: GiSteak,
    },
    {
      id: 5,
      amount: nutritionalFacts.sugar,
      category: "sugar",
      Icon: LuCakeSlice,
    },
  ];

  return (
    <>
      <div className="recipe-header">
        <h1>{name}</h1>
      </div>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map((fact) => (
          <NutritionalFacts fact={fact} key={fact.id} />
        ))}
      </div>
    </>
  );
}
