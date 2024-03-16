import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import { usePopular } from "../hooks/usePopular";
import { useTopRated } from "../hooks/useTopRated";
import { useUpComing } from "../hooks/useUpcoming";

const MovieListContainer = () => {
  const movies = useSelector((state) => state.movies);
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div className="bg-black text-white px-8">
      <div className="relative md:-mt-56">
        <MovieList
          title={"Latest Release"}
          movieDetails={movies?.nowPlaying}
          listNum={0}
        />
        <MovieList
          title={"Popular"}
          movieDetails={movies?.popularMovies}
          listNum={1}
        />
        <MovieList
          title={"Top Rated"}
          movieDetails={movies?.topRatedMovies}
          listNum={2}
        />
        <MovieList
          title={"Upcoming"}
          movieDetails={movies?.upComingMovies}
          listNum={3}
        />
      </div>
    </div>
  );
};

export default MovieListContainer;
