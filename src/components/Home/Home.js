import React, { useEffect, useState } from "react";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import SeriesBody from "../SeriesBody/SeriesBody";
import SeriesBodyTwo from "../SeriesBodyTwo/SeriesBodyTwo";
import Slider from "../Slider/Slider";

export default function Home({
  series,
  items,
  topMovies,
  upMovies,
  nowMovies,
  series2,
}) {
  return (
    <div>
      <Navbar />
      <Header />
      <Slider items={items} />
      <SeriesBody series={series} />
      <SeriesBodyTwo series2={series2} />
      <Body topMovies={topMovies} upMovies={upMovies} nowMovies={nowMovies} />
      <Footer />
    </div>
  );
}
