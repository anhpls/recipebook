import Card from "./Card";
import "../styles/Cards.css";

// export const recipes = [
//   {
//     id: 1,
//     name: "Poke Bowl",
//     image:
//       "https://www.carolynscooking.com/wp-content/uploads/2021/01/Poke-Bowl-18-2-500x500.jpg",
//     tag: "Casual Lunch",
//     time: 15,
//   },
//   {
//     id: 2,
//     name: "Carbonara",
//     image:
//       "https://www.halfbakedharvest.com/wp-content/uploads/2022/08/Zucchini-Carbonara-with-Crispy-Prosciutto-and-Burrata-4.jpg",
//     tag: "Romantic Dinner",
//     time: 25,
//   },
//   {
//     id: 3,
//     name: "Acai Bowl",
//     image:
//       "https://www.cookingclassy.com/wp-content/uploads/2019/05/acai-bowl-23.jpg",
//     tag: "Snack",
//     time: 15,
//   },
//   {
//     id: 4,
//     name: "Blueberry Cheesecake",
//     image:
//       "https://oliofarchioni.com/wp-content/uploads/2022/07/cheesecake-senza-burro.jpg",
//     tag: "Sweets",
//     time: 40,
//   },
//   {
//     id: 5,
//     name: "Garlic Steak",
//     image:
//       "https://meateatingmilitaryman.com/wp-content/uploads/2023/06/parmesan-garlic-steak.jpg",
//     tag: "Wine Night",
//     time: 30,
//   },
//   {
//     id: 6,
//     name: "Birria Tacos",
//     image:
//       "https://www.billyparisi.com/wp-content/uploads/2021/04/birria-1.jpg",
//     tag: "Fingerlickin'",
//     time: 120,
//   },
// ];

function CardList({ recipes }) {
  return (
    <>
      <section className="cards">
        {recipes.map((recipe) => (
          <Card recipe={recipe} key={recipe.id} />
        ))}
      </section>
    </>
  );
}

export default CardList;
