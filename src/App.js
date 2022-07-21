import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/Slider/Slider";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
    };

    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7a47242793d59eb1570389827de8affd&language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setItems(response.results);
      })
      .catch((err) => console.error(err));

  }, [items]);

  return (
    <div className="App">
      <Navbar />
      <Slider items={items} />
    </div>
  );
}

export default App;
