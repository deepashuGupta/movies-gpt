import { useEffect } from "react";
import { URL_OPTION } from "../utils/constant";
import { addTopRated } from "../store/movieSlice";
import { useDispatch } from "react-redux";

export const useTopRated = () => {
  const dispatch = useDispatch();
  const handleTopRatedMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        URL_OPTION
      );
      const json = await data.json();
      dispatch(addTopRated(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleTopRatedMovies();
  }, []);
};
