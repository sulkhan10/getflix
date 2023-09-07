import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import MoonLoader from "react-spinners/MoonLoader";
import axios from "axios";

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
        <span className="text-white font-medium">{rating}</span>
      </div>
      <div className="mt-2 text-center">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
}
let Main = () => {
  let [loading, setLoading] = useState(true);
  let [nowPlaying, setNowPlaying] = useState([]);
  let [popular, setPopular] = useState([]);
  let [upComing, setUpComing] = useState([]);
  let [topRated, setTopRated] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/now_playing?api_key=12b71e90fbfaf4c9bd6b49822f24b090&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      var index = 7;
      let dataMovies = [];
      for (var i = 0; i < response.data.results.length; i++) {
        if (i < index) {
          dataMovies.push(response.data.results[i]);
        }
      }
      setNowPlaying(dataMovies);
    });
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/popular?api_key=12b71e90fbfaf4c9bd6b49822f24b090&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      var index = 7;
      let dataMovies = [];
      for (var i = 0; i < response.data.results.length; i++) {
        if (i < index) {
          dataMovies.push(response.data.results[i]);
        }
      }
      setPopular(dataMovies);
    });
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/upcoming?api_key=12b71e90fbfaf4c9bd6b49822f24b090&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      var index = 7;
      let dataMovies = [];
      for (var i = 0; i < response.data.results.length; i++) {
        if (i < index) {
          dataMovies.push(response.data.results[i]);
        }
      }
      setUpComing(dataMovies);
    });
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/movie/top_rated?api_key=12b71e90fbfaf4c9bd6b49822f24b090&language=en-US&page=1",
    }).then(function (response) {
      console.log(response.data.results);
      var index = 7;
      let dataMovies = [];
      for (var i = 0; i < response.data.results.length; i++) {
        if (i < index) {
          dataMovies.push(response.data.results[i]);
        }
      }
      setTopRated(dataMovies);
    });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
          <MoonLoader color="red" size={150} data-testid="loader" />
        </div>
      ) : (
        <div className="min-h-screen bg-gray-900">
          <div className="mx-20 pt-4 bg-gray-900 z-30 text-white">
          <div className="flex py-4 items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Now Playing</h2>
            <Link
              to="/nowplaying"
              className="text-lg text-gray-400 hover:text-white"
            >
              See All
            </Link>
          </div>
            <div className="grid grid-cols-7 gap-4">
              {nowPlaying.map((movie) => (
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
          <div className="mx-20 pt-4 bg-gray-900 z-30 text-white">
          <div className="flex py-4 items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Up Coming</h2>
            <Link
              to="/upcoming"
              className="text-lg text-gray-400 hover:text-white"
            >
              See All
            </Link>
          </div>
            <div className="grid grid-cols-7 gap-4">
              {upComing.map((movie) => (
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
          <div className="mx-20 pt-4 bg-gray-900 z-30 text-white">
          <div className="flex py-4 items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Popular</h2>
            <Link
              to="/popular"
              className="text-lg text-gray-400 hover:text-white"
            >
              See All
            </Link>
          </div>
            <div className="grid grid-cols-7 gap-4">
              {popular.map((movie) => (
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
          <div className="mx-20 pt-4 pb-12 bg-gray-900 z-30 text-white">
          <div className="flex py-4  items-center justify-between">
            <h2 className="text-3xl font-bold text-white">Top Rated</h2>
            <Link
              to="/toprated"
              className="text-lg text-gray-400 hover:text-white"
            >
              See All
            </Link>
          </div>
            <div className="grid grid-cols-7 gap-4">
              {topRated.map((movie) => (
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
      )}
    </div>
  );
};
export default Main;
