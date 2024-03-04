import { useEffect } from "react";
import { URL_OPTION } from "../utils/constant";
import { addPopular } from "../store/movieSlice";
import { useDispatch } from "react-redux";

export const usePopular = () => {
  const dispatch = useDispatch();
  const handlePopularMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        URL_OPTION
      );
      const json = await data.json();
      dispatch(addPopular(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handlePopularMovies();
  }, []);
};
