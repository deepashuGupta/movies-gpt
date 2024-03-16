import { useDispatch, useSelector } from "react-redux";
import { gptInput } from "../utils/langConstant";
import { useRef } from "react";
import { openai } from "../utils/gptConfig";
import { URL_OPTION } from "../utils/constant";
import { addMovies } from "../store/gptSlice";

const GptInput = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.appConfig.selectedLanguage);
  const searchInput = useRef(null);

  const searchTMDBMovie = async (movie) => {
    console.log(movie);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      URL_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearchQuery = async (e) => {
    e.preventDefault();
    const query =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchInput.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const moviesName = gptResult.choices[0].message.content.split(", ");
    let movieResult = moviesName.map((movie) => searchTMDBMovie(movie));
    const movieResultData = await Promise.all(movieResult);
    dispatch(addMovies({ moviesName, movieResultData }));
  };

  return (
    <div className="absolute top-20 text-white" onSubmit={handleSearchQuery}>
      <form>
        <input
          ref={searchInput}
          className="w-[200px] px-4 py-2 mr-4 text-black md:w-[300px] lg:w-[500px]"
          type="text"
          placeholder={gptInput[lang].inputPlaceholder}
        />
        <button className="px-4 py-2 bg-red-700 md:px-8" type="submit">
          {gptInput[lang].buttonText}
        </button>
      </form>
    </div>
  );
};

export default GptInput;
