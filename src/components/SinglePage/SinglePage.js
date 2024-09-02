import React, { useEffect, useState } from "react";
import imdbLogo from "../../pics/imdb-logo.png";
import { useParams } from "react-router-dom";
import { MdOutlineExpandMore } from "react-icons/md";

export default function SinglePage() {
  const movie_id = Number(useParams().id);

  const [movieInfo, setMovieInfo] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [movieCredits, setMovieCredits] = useState([]);
  // const [pageNumber, setPageNumber] = useState(1);
  const hoverClasses = [
    "hover:bg-[#de518e]",
    "hover:bg-[#A9619A]",
    "hover:bg-[#7570A7]",
    "hover:bg-[#4080B3]",
    "hover:bg-[#0b8fbf]",
  ];

  // console.log(movieInfo.genres);

  useEffect(() => {
    const fetchMovieData = async () => {
      const options = {
        method: "GET",
      };

      try {
        const infoResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=7a47242793d59eb1570389827de8affd&language=en-US`,
          options
        );
        const infoData = await infoResponse.json();
        setMovieInfo(infoData);

        const reviewsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=7a47242793d59eb1570389827de8affd&language=en-US&page=1`,
          options
        );
        const reviewsData = await reviewsResponse.json();
        setMovieReviews(reviewsData.results);

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=7a47242793d59eb1570389827de8affd&language=en-US`,
          options
        );
        const creditsData = await creditsResponse.json();
        setMovieCredits(creditsData.cast);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieData();
  }, [movie_id]);

  return (
    <div className="p-10">
      <div className="flex flex-row w-full">
        <div className="max-w-[400px] min-w-[400px] min-h-[600px]">
          <img
            className="rounded-md"
            src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
            alt={movieInfo.name}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="min-w-[50%] overflow-auto h-auto ml-6">
            <p className="text-5xl text-textt">
              {movieInfo.title && movieInfo.title.length > 35
                ? movieInfo.title.substring(0, 35) + "..."
                : movieInfo.title}
            </p>
            <div className="h-1 bg-textt w-full opacity-70 mt-1 mb-2 rounded-full"></div>

            <div className="flex flex-row text-textt mb-2">
              <p className="text-2xl mr-10"> {movieInfo.release_date} </p>
              <img
                src={imdbLogo}
                alt="imdb"
                className="w-7 h-7 mt-1 mr-2 rounded-full"
              />
              <p className="text-2xl text-textt mr-1">
                {Math.round(movieInfo.vote_average * 10) / 10}
              </p>
              <p className="text-2xl opacity-50 text-textt mr-10">
                ({movieInfo.vote_count})
              </p>
              <p className="text-2xl">
                {" "}
                {movieInfo.budget && movieInfo.budget.toLocaleString()} ${" "}
              </p>
            </div>
            <div>
              <p className="text-textt text-2xl">{movieInfo.overview}</p>
            </div>
            <div className="flex flex-row space-x-2 mt-4">
              {movieInfo.genres &&
                movieInfo.genres.map((e, index) => (
                  <p
                    key={index}
                    className={`text-textt p-2 text-lg rounded-lg hover:cursor-pointer 
                              max-w-fit border-textt border-solid font-medium
                              border-2 ${hoverClasses[index]}`}
                  >
                    {e.name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex flex-row">
          <div className="bg-primaryy w-[5px]"></div>
          <p className="text-textt text-3xl mx-2"> Casts </p>
        </div>

        <div
          className="card overflow-hidden gap-2 w-full max-h-[445px] flex flex-row
                        justify-between flex-wrap bg-darkBackk my-3"
        >
          {movieCredits.map((e) => {
            return (
              <div className="w-1/6 h-full rounded-lg shadow-custom bg-transparent mb-5">
                {e.profile_path ? (
                  <figure>
                    <img
                      className="w-full h-[300px] rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${e.profile_path}`}
                      alt="not found"
                    />
                  </figure>
                ) : (
                  <div className="w-full h-[300px] rounded-lg border-1">
                    {" "}
                    Not Available{" "}
                  </div>
                )}
                <div className="card-body p-0 gap-0 space-y-0">
                  <p className="card-title text-textt text-xl "> Name : </p>
                  <p className="text-textt text-xl opacity-70 ml-1">
                    {" "}
                    {e.name}{" "}
                  </p>
                  <p className="card-title text-textt text-xl ">
                    {" "}
                    Character :{" "}
                  </p>
                  <p className="text-textt text-xl opacity-70 ml-1">
                    {" "}
                    {e.character}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-row">
          <div className="bg-primaryy w-[5px]"></div>
          <p className="text-textt text-3xl mx-2"> Reviews </p>
        </div>

        <div className="flex-flex-col w-full justify-between gap-3 bg-darkBackk">
          {movieReviews.map((e) => {
            return (
              <>
                <details
                  className="collapse flex flex-col justify-between
                                    bg-darkBackk shadow-custom mt-4"
                >
                  <summary className="collapse-title text-2xl font-medium text-textt ">
                    <div className="flex flex-row">
                      {e.author_details.avatar_path != null ? (
                        <img
                          src={`https://image.tmdb.org/t/p/original/${e.author_details.avatar_path}`}
                          alt="nothing to see"
                          className="w-[110px] h-[110px] rounded-full border-[4px] border-secondaryy"
                        />
                      ) : (
                        <div
                          className="w-[110px] flex justify-center items-center text-base 
                      h-[110px] rounded-full border-[4px] border-secondaryy"
                        >
                          {" "}
                          No Photo{" "}
                        </div>
                      )}
                      <p className="my-auto mx-4"> {e.author} </p>
                      <MdOutlineExpandMore
                        className="text-secondaryy border-[3px] border-secondaryy
                    w-10 h-10 rounded-full absolute right-8 top-12"
                      />
                    </div>
                  </summary>

                  <div className="collapse-content ">
                    <div className="bg-transparent text-textt text-xl">
                      <p> {e.content} </p>
                      <div className="flex flex-row mt-1 opacity-50 text-lg">
                        <p>{e.created_at.substr(0, 10)}</p>
                        <p className="ml-2 mr-1"> Last Update : </p>{" "}
                        <p>{e.updated_at.substr(0, 10)}</p>
                      </div>
                      <div className="flex flex-row text-lg">
                        <p>
                          credit :{" "}
                          <a className="opacity-50" href={e.url}>
                            {" "}
                            {e.url}{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </details>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
