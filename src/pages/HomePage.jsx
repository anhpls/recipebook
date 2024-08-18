import CardList from "../components/CardList";
import Header from "../components/Header";
import useFetchRecipes from "../hooks/useFetchRecipes";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Homepage() {
  const [fetchRecipes, { data, loading, error }] = useFetchRecipes();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchRecipes(searchParams.get("search"));
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchRecipes(searchTerm);
    }
  };

  return (
    <>
      <NavBar />
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {data && <CardList recipes={data} />}
      {error && <p className="error-message">{error}</p>}
      <Footer />
    </>
  );
}
