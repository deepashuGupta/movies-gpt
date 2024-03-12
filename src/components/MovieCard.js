import React from "react";
import { DUMMY_MOVIE_POSTER, POSTER_URL } from "../utils/constant";

const MovieCard = ({ info }) => {
  return (
    <div className="mr-4">
      {info?.poster_path ? (
        <img
          className="max-w-40"
          src={POSTER_URL + info?.poster_path}
          alt={info?.title + "poster"}
        />
      ) : (
        <img
          className="max-w-40"
          src={DUMMY_MOVIE_POSTER}
          alt={info?.title + "poster"}
        />
      )}
    </div>
  );
};

export default MovieCard;
