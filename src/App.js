import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";
import Body from "./components/Body/Body";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [movies, setMovies] = useState([]);
  
  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7a47242793d59eb1570389827de8affd&language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setItems(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Slider items={items} />
      <Body movies={movies} />
    </div>
  );
}

export default App;
