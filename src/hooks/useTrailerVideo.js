import { useDispatch } from "react-redux";
import { URL_OPTION } from "../utils/constant";
import { addTrailers } from "../store/movieSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const handleMoiveTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      URL_OPTION
    );
    const json = await data.json();
    const filterVideo = json.results.filter(
      (video) => video?.type === "Trailer"
    );
    dispatch(addTrailers(filterVideo));
  };
  useEffect(() => {
    handleMoiveTrailer();
  }, []);
};
