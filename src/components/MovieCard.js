import React, { useState } from "react";
import { DUMMY_MOVIE_POSTER, POSTER_URL } from "../utils/constant";

const MovieCard = ({ info }) => {
  const [showIcon, setShowIcon] = useState(false);
  const handleMouseEnter = () => {
    setShowIcon(true);
  };

  const handleMouseLeave = () => {
    setShowIcon(false);
  };
  return (
    <>
      <div className="mr-4 hover:scale-110 transition ease-out duration-200">
        {info?.poster_path ? (
          <>
            <img
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="max-w-40"
              src={POSTER_URL + info?.poster_path}
              alt={info?.title + "poster"}
            />
          </>
        ) : (
          <img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="max-w-40 "
            src={DUMMY_MOVIE_POSTER}
            alt={info?.title + "poster"}
          />
        )}
        {showIcon && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="p-2 text-2xl -mt-12 z-50"
          >
            <i className="fa-solid fa-circle-play mr-4 cursor-pointer"></i>
            <i class="fa-solid fa-circle-plus cursor-pointer"></i>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
