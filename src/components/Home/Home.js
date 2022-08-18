import React from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import SeriesBody from "../SeriesBody/SeriesBody";
import SeriesBodyTwo from "../SeriesBodyTwo/SeriesBodyTwo";
import Slider from "../Slider/Slider";

export default function Home({ series, items, movies, series2 }) {
  return (
    <div>
      <Header />
      <Slider items={items} movies={movies} />
      <SeriesBody series={series} />
      <SeriesBodyTwo series2={series2} />
      <Body movies={movies}/>
    </div>
  );
}
