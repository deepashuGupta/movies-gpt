import { useEffect } from "react";
import { URL_OPTION } from "../utils/constant";
import { addUpComings } from "../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export const useUpComing = () => {
  const dispatch = useDispatch();
  const upComingMovies = useSelector((state) => state?.movies?.upComingMovies);
  const handleUpComingMovies = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        URL_OPTION
      );
      const json = await data.json();
      dispatch(addUpComings(json.results));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !upComingMovies && handleUpComingMovies();
  }, []);
};
