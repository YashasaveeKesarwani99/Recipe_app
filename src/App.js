import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import Recipe from "./Recipe";

const App = () => {
  const API_KEY = "1bb77540152d469f9bc6823601651712";
  const API_ID = "e63150b1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    getRecipes();
  }, [search]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
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
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map((obj) => (
        <Recipe
          key={obj.recipe.label}
          image={obj.recipe.img}
          title={obj.recipe.label}
          calories={obj.recipe.calories}
        />
      ))}
    </div>
  );
};

export default App;
