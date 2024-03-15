import React, { useState } from "react";
import { DUMMY_MOVIE_POSTER, POSTER_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setShowPopUp } from "../store/appConfigSlice";
import { getMovieDetails, getTrailerById } from "../store/actions/movieAction";

const MovieCard = ({ info }) => {
  const [showIcon, setShowIcon] = useState(false);
  const dispatch = useDispatch();
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
            className="-mt-10 z-50"
          >
            <button
              className="w-40 py-2 bg-black bg-opacity-50"
              onClick={() => {
                dispatch(setShowPopUp(true));
                dispatch(getMovieDetails(info?.id));
                dispatch(getTrailerById(info?.id));
              }}
            >
              <i className="fa-solid fa-circle-play"></i> Trailer
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieCard;
