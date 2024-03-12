import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovie = () => {
  const { movieName, moviesData } = useSelector((state) => state.gptData);
  if (!movieName) return <></>;
  return (
    <div className="relative top-44 mx-8 py-4 text-white">
      {movieName.map((movie, index) => {
        return (
          <MovieList
            key={movie}
            title={movie}
            movieDetails={moviesData[index]}
            listNum={index}
          />
        );
      })}
    </div>
  );
};

export default GptMovie;
