import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import { useEffect } from "react";
import RecipeHeader from "../components/RecipeHeader";
import Loading from "../components/Loading";
import RecipeInfo from "../components/RecipeInfo";
import Footer from "../components/Footer";
import Error from "../components/Error";
import NavBar from "../components/NavBar";

export default function RecipePage({ recipes }) {
  const { id } = useParams();
  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  console.log({ data, loading, error });

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;
  if (data?.errors) return <Error explanation="Recipe not found" />;

  return (
    <>
      <NavBar />
      <div>
        {data && (
          <>
            <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} />
            <RecipeInfo
              instructions={data.instructions}
              image={data.thumbnail_url}
              desc={data.description}
              ingredients={data.sections[0].components}
            />
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
