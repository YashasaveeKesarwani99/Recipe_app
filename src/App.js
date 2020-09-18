import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";

const App = () => {
  const API_KEY = "1bb77540152d469f9bc6823601651712";
  const API_ID = "e63150b1";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("mera naam");
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar" />
        <button
          type="submit"
          className="search-button"
          onClick={() => setCounter(counter + 1)}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
