import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp"
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  const [items, setItems] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [series2, setSeries2] = useState([]);

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

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setSeries(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=3",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setSeries2(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />}>
        </Route>
        <Route path="/" element={<Home items={items} movies={movies} series={series} series2={series2} />}>
        </Route>
        <Route path="signup" element={<SignUp />} ></Route>
        <Route path="*" element={<NotFoundPage />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
