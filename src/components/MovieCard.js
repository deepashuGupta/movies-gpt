import React from "react";
import { POSTER_URL } from "../utils/constant";

const MovieCard = ({ info }) => {
  return (
    <div className="mr-4">
      <img
        className="min-w-40"
        src={POSTER_URL + info?.poster_path}
        alt={info?.title + "poster"}
      />
    </div>
  );
};

export default MovieCard;
