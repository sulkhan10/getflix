import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";

import { useParams } from "react-router-dom";
function MovieCard(props) {
  const { title, imageUrl, rating } = props;
  return (
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full" />
      <div className="absolute top-0 right-0 p-2 bg-gray-800 bg-opacity-75 rounded-lg group-hover:flex items-center">
        <svg
          className="w-4 h-4 fill-current text-yellow-500 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M19.434 7.45a1.25 1.25 0 00-1.824-1.325l-5.297-.772-2.364-4.793a1.25 1.25 0 00-2.255 0L7.688 5.353l-5.297.772A1.25 1.25 0 001 7.548v.001l3.835 3.74-.905 5.255a1.25 1.25 0 001.82 1.34l4.74-2.49 4.741 2.49a1.25 1.25 0 001.82-1.34L16.165 11.29l3.835-3.74v-.001a1.25 1.25 0 00.44-1.1zM10 13.81a1.25 1.25 0 00-.742.246L6.812 16.24l1.555-4.522a1.25 1.25 0 00-.36-.97L3.676 7.8l4.273-.622a1.25 1.25 0 00.965-.723L10 3.497l1.086 2.958a1.25 1.25 0 001.965.512l4.273.622-3.312 2.552a1.25 1.25 0 00-.36.97l1.555 4.522-2.446-2.684a1.25 1.25 0 00-.741-.246z" />
        </svg>
        <span className="text-white font-medium">{rating.toFixed(1)}</span>
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
}
function DetailMovie() {
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  let [similar, setSimilar] = useState([]);
  let [year, setYear] = useState(0);

  let [loading, setLoading] = useState(true);

  const [formattedDate, setFormattedDate] = useState(null);
  const { id } = useParams();
  console.log(id);
  const options = { year: "numeric", month: "long", day: "numeric" };
  useEffect(() => {
    setLoading(true);
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=12b71e90fbfaf4c9bd6b49822f24b090`
      );
      const data = await response.json();
      console.log(data);
      setFormattedDate(
        new Date(data.release_date).toLocaleDateString("en-US", options)
      );
      setYear(data.release_date.slice(0, 4));
      setMovie(data);
    }

    async function fetchTrailer() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=12b71e90fbfaf4c9bd6b49822f24b090`
      );
      const data = await response.json();
      setTrailer(data.results[0]);
    }

    fetchMovie();
    fetchTrailer();
    axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${id}/similar?api_key=12b71e90fbfaf4c9bd6b49822f24b090`,
    }).then(function (response) {
      console.log(response.data.results);
      var index = 7;
      let dataMovies = [];
      for (var i = 0; i < response.data.results.length; i++) {
        if (i < index) {
          dataMovies.push(response.data.results[i]);
        }
      }
      setSimilar(dataMovies);
    });
    setTimeout(() => setLoading(false), 1000);
  }, [id]);

  if (!movie || !trailer) {
    return (
      <div className="min-h-screen bg-gray-900 flex justify-center items-center">
        <MoonLoader color="red" size={150} data-testid="loader" />
      </div>
    );
  }

  const trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;

  return (
    <div className="bg-gray-900 text-white">
      {loading ? (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
          <MoonLoader color="red" size={150} data-testid="loader" />
        </div>
      ) : (
        <div className="container bg-gray-900 text-white mx-auto">
          <h1 className="text-5xl font-bold py-6">
            {movie.title} ({year})
          </h1>
          <h1 className="text-xl font-bold mb-4">{movie.tagline}</h1>
          <hr className="border-t border-white" />

          <div className="flex pt-4">
            <div className="w-1/3">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div className="w-2/3 ml-8">
              <h1 className="text-xl font-bold mb-4">
                {movie.production_countries[0].iso_3166_1} || {formattedDate}
              </h1>
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 fill-current text-yellow-500 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M19.434 7.45a1.25 1.25 0 00-1.824-1.325l-5.297-.772-2.364-4.793a1.25 1.25 0 00-2.255 0L7.688 5.353l-5.297.772A1.25 1.25 0 001 7.548v.001l3.835 3.74-.905 5.255a1.25 1.25 0 001.82 1.34l4.74-2.49 4.741 2.49a1.25 1.25 0 001.82-1.34L16.165 11.29l3.835-3.74v-.001a1.25 1.25 0 00.44-1.1zM10 13.81a1.25 1.25 0 00-.742.246L6.812 16.24l1.555-4.522a1.25 1.25 0 00-.36-.97L3.676 7.8l4.273-.622a1.25 1.25 0 00.965-.723L10 3.497l1.086 2.958a1.25 1.25 0 001.965.512l4.273.622-3.312 2.552a1.25 1.25 0 00-.36.97l1.555 4.522-2.446-2.684a1.25 1.25 0 00-.741-.246z" />
                </svg>
                <span className="text-white  font-bold">
                  {movie.vote_average.toFixed(1)}
                </span>
              </div>
              <h1 className="text-xl font-bold my-4">
                {movie.genres.map((genre) => 
                  genre.name + "  "
                )}
              </h1>

              <p className="text-gray-500 text-lg my-4">{movie.overview}</p>
            </div>
          </div>
          <div>
            <div className="pt-12">
              <iframe
                className="w-full h-[700px]"
                src={trailerUrl}
                title={movie.title}
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <div className=" bg-gray-900 py-12 z-30 text-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl pb-4 font-bold text-white">
                    Similar Movies
                  </h2>
                </div>
                <div className="grid grid-cols-7 gap-4">
                  {similar.map((movie) => (
                    <Link
                      to={`/detailmovie/${movie.id}`}
                      key={movie.id}
                      className="block  zoom duration-200"
                    >
                      <MovieCard
                        key={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        rating={movie.vote_average}
                        imageUrl={
                          "http://image.tmdb.org/t/p/w500" + movie.poster_path
                        }
                      />
                    </Link>
                  ))}
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailMovie;
