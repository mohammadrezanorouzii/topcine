import React, { useEffect, useState } from "react";
import styles from "./SinglePage.module.scss";
import imdbLogo from "../../pics/imdb-logo.png";
import { useParams } from "react-router-dom";
import { MdOutlineExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SinglePage() {
  const movie_id = Number(useParams().id);

  const [movieInfo, setMovieInfo] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const [visibleReviewIndex, setVisibleReviewIndex] = useState(null);
  const handleButtonClick = (index) => {
    setVisibleReviewIndex(visibleReviewIndex === index ? null : index); // Toggle visibility
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1)
  }
  const prevPage = () => {
    setPageNumber(pageNumber - 1)
  }

  console.log(movieInfo.genres);

  const options = {
    method: "GET",
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7a47242793d59eb1570389827de8affd&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovieInfo(response);
      })
      .catch((err) => console.error(err));
  }, [movie_id]);

  // Reviews

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovieReviews(response.results);
      })
      .catch((err) => console.error(err));
  }, [movie_id]);

  // Credits - cast

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=7a47242793d59eb1570389827de8affd&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        return setMovieCredits(response.cast);
      })
      .catch((err) => console.error(err));
  }, [movie_id]);

  // console.log(movieReviews);

  return (
    <>
      <div className={styles["header"]}>
        <div className={styles.line}></div>
        <div className={styles["img-container"]}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.name}
          />
        </div>
        <div className={styles.info}>
          <p className={styles.name}>
            {movieInfo.title && movieInfo.title.length > 35
              ? movieInfo.title.substring(0, 35) + "..."
              : movieInfo.title}
          </p>
          <div className={styles["down-info"]}>
            <p className={styles.date}> {movieInfo.release_date} </p>
            <img src={imdbLogo} alt="imdb" />
            <p className={styles.imdb}>
              {Math.round(movieInfo.vote_average * 10) / 10}
            </p>
            <p className={styles.count}> ({movieInfo.vote_count}) </p>
          </div>
          {/* <p> {movieInfo.budget} $ </p> */}
          <div>
            <p className={styles.overview}>{movieInfo.overview}</p>
          </div>
          {/* <div className={styles["genres-container"]}>
            {allGenres.map(e => {
              return ( <p className={styles["genre"]}> {e.id} </p> )
            })}
          </div> */}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles["total-casts"]}>
          <div className={styles["text-container"]}>
            <div className={styles["text-line"]}></div>
            <p> CASTS </p>
          </div>

          <div className={styles["cast"]}>
            {movieCredits.map((e) => {
              return (
                <div className={styles["one-cast"]}>
{e.profile_path  ?                 <img
                    src={`https://image.tmdb.org/t/p/original/${e.profile_path}`}
                    alt="not found"
                  /> : <div className={styles["no-profile"]}> Not Available </div> }
                  <p className={styles["name-text"]}> Name : </p>
                  <p className={styles["cast-name"]}> {e.name} </p>
                  <p className={styles["char-text"]}> Character : </p>
                  <p className={styles["cast-char"]}> {e.character} </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className={styles["text-container"]}>
          <div className={styles["text-line"]}></div>
          <p> REVIEWS </p>
        </div>
        <div className={styles["total-reviews"]}>
          {movieReviews.map((e, index) => {
            return (
              <>
                <div className={styles["one-card"]} key={index}>
                  <div
                    className={styles["review-header"]}
                    onClick={() => handleButtonClick(index)}
                  >
                    {e.author_details.avatar_path != null ? (
                      <img
                        src={`https://image.tmdb.org/t/p/original/${e.author_details.avatar_path}`}
                        alt="nothing to see"
                      />
                    ) : (
                      <div className={styles["noImage"]}> Not Available </div>
                    )}
                    <p> {e.author} </p>
                    <div>
                      <MdOutlineExpandMore className={styles["icon"]} />
                    </div>
                  </div>
                  {visibleReviewIndex === index && (
                    <div className={styles["review-context"]}>
                      <p> {e.content} </p>
                      {/* {!showAll && <div><p>{e.content.substr(0,1000)}</p> <button onClick={()=>{setShowAll(!showAll)}}> show all </button> </div>} 
                    {showAll && <p>{e.content}</p>}  */}
                      <div className={styles["review-details"]}>
                        <p className={styles["review-date"]}>
                          {e.created_at.substr(0, 10)}
                        </p>
                        <p className={styles.lastUpdate}> Last Update : </p>{" "}
                        <p className={styles["review-up"]}>
                          {e.updated_at.substr(0, 10)}
                        </p>
                      </div>
                      <div className={styles.url}>
                        <p>
                          credit : <a href={e.url}> {e.url} </a>
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
