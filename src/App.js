import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LogIn from "./components/LogIn/LogIn";
// import Home from "./components/Home/Home";
// import SignUp from "./components/SignUp/SignUp";
// import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
// import SinglePage from "./components/SinglePage/SinglePage";
import ScrollToTop from "./components/ScrollToTheTop/ScrollToTop";
import "./styles/tailwind.scss"; // Tailwind CSS
import "./styles/index.scss"; // Your SASS styles
const LazyLogin = React.lazy(() => import("./components/LogIn/LogIn"));
const LazyHome = React.lazy(() => import("./components/Home/Home"));
const LazySignup = React.lazy(() => import("./components/SignUp/SignUp"));
const LazyNotFound = React.lazy(() =>
  import("./components/NotFoundPage/NotFoundPage")
);
const LazySinglePage = React.lazy(() =>
  import("./components/SinglePage/SinglePage")
);

function App() {
  const [items, setItems] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [nowMovies, setNowMovies] = useState([]);
  const [upMovies, setUpMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [series2, setSeries2] = useState([]);

  //----------------------------------- FETCH DATA -----------------------------------

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=7a47242793d59eb1570389827de8affd&language=en-US"
    )
      .then((response) => response.json())
      .then((response) => {
        return setItems(response.results.splice(0, 18));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        return setTopMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        return setNowMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        return setUpMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((response) => {
        return setSeries(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=2"
    )
      .then((response) => response.json())
      .then((response) => {
        return setSeries2(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/login"
          element={
            <React.Suspense fallback="Loading ... ">
              <LazyLogin />
            </React.Suspense>
          }
        />
        <Route
          path="/"
          element={
            <React.Suspense fallback="Loading ... ">
              <LazyHome
                items={items}
                topMovies={topMovies}
                nowMovies={nowMovies}
                upMovies={upMovies}
                series={series}
                series2={series2}
              />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="signup"
          element={
            <React.Suspense fallback="Loading ... ">
              <LazySignup />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="singlepage/:id"
          element={
            <React.Suspense fallback="Loading ... ">
              <LazySinglePage />
            </React.Suspense>
          }
        ></Route>
        <Route
          path="*"
          element={
            <React.Suspense fallback="Loading ... ">
              {" "}
              <LazyNotFound />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
