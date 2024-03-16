import { useDispatch, useSelector } from "react-redux";
import { URL_OPTION } from "../utils/constant";
import { addNowPlaying } from "../store/movieSlice";
import { useEffect } from "react";

export const useNowPlaying = () => {
  const dispatch = useDispatch();
  const nowPlaying = useSelector((state) => state?.movies?.nowPlaying);
  const handleNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=IN",
      URL_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlaying(json.results));
  };
  useEffect(() => {
    !nowPlaying && handleNowPlaying();
  }, []);
};
