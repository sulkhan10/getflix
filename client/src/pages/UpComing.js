import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../index.css";
import Pagination from "../components/Pagination";
import MoonLoader from "react-spinners/MoonLoader";
let NowPlaying = () => {
  let [loading, setLoading] = useState(true);
  let [currentPage, setCurrentPage] = useState(1);
  let [totalPages, setTotalPages] = useState(1);
  let [upComing, setUpComing] = useState([]);
  const handleChangePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function MovieCard(props) {
    const { title, imageUrl, rating } = props;
    return (
      <div className="relative">
        {imageUrl === "http://image.tmdb.org/t/p/w500null" ? (
          <img
            src="https://i.imgur.com/Z2MYNbj.png/large_movie_poster.png"
            alt={title}
            className=" w-full"
          />
        ) : (
          <img src={imageUrl} alt={title} className="w-full" />
        )}
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
  let fetchUpComing = async () => {
    let { data } = await axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=12b71e90fbfaf4c9bd6b49822f24b090&language=en-US&page=" +
        currentPage,
    });
    console.log(data.results);
    setUpComing(data.results);
    setTotalPages(data.total_pages);
  };
  useEffect(() => {
    setLoading(true);
    fetchUpComing();
    setTimeout(() => setLoading(false), 2000);
  }, [currentPage]);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
          <MoonLoader color="red" size={150} data-testid="loader" />
        </div>
      ) : (
        <div className="">
            <h1 className="px-12 text-3xl bg-gray-900 text-white font-bold py-6">
            Up Coming
          </h1>
          <div className="px-12 py-4 grid bg-gray-900 text-white grid-cols-5 gap-4">
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChangePage={handleChangePage}
          />
        </div>
      )}
    </div>
  );
};
export default NowPlaying;
