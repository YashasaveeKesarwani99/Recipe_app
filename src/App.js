import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./Recipe";

const App = () => {
  const API_KEY = "1bb77540152d469f9bc6823601651712";
  const API_ID = "e63150b1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  // useEffect(() => {
  //getRecipes();
  // }, [query]);

  const getRecipes = () =>
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.hits);
        console.log(data.hits);
      });

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    getRecipes();
  };

  return (
    <div className="App">
      <form className="search-form">
        <input
          type="text"
          className="search-bar"
          value={search}
          onChange={updateSearch}
        />
        <button onClick={getSearch} type="submit" className="search-button">
          Search
        </button>
      </form>

      {recipes.map((obj) => (
        <Recipe
          key={obj.recipe.label}
          image={obj.recipe.image}
          title={obj.recipe.label}
          calories={obj.recipe.calories}
        />
      ))}
    </div>
  );
};

export default App;
