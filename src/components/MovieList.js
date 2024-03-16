import MovieCard from "./MovieCard";

const MovieList = ({ title, movieDetails, listNum }) => {
  // console.log(title, movieDetails);
  const slideLeft = (index) => {
    const leftSlider = document.getElementsByClassName("slider");
    leftSlider[index].scrollLeft -= 500;
  };

  const slideRight = (index) => {
    const rightSlider = document.getElementsByClassName("slider");
    rightSlider[index].scrollLeft += 500;
  };
  if (!movieDetails) return <></>;
  return (
    <div className="relative">
      <h1 className="text-2xl font-bold py-2">{title}</h1>
      {movieDetails.length > 10 ? (
        <span className="h-60 w-20 absolute  bg-gradient-to-r py-20 from-black">
          <i
            onClick={() => slideLeft(listNum)}
            className="fa-solid fa-chevron-left cursor-pointer hidden hover:opacity-50 md:block"
          ></i>
        </span>
      ) : (
        ""
      )}
      <div className="flex overflow-x-scroll scroll-smooth slider no-scrollbar">
        {movieDetails &&
          movieDetails.map((movie) => {
            return <MovieCard key={movie?.id} info={movie} />;
          })}
      </div>
      {movieDetails.length > 10 ? (
        <span className="h-60 w-20 absolute right-0 top-12 pl-16 py-24 bg-gradient-to-l from-black">
          <i
            onClick={() => slideRight(listNum)}
            className="fa-solid fa-chevron-right cursor-pointer hidden hover:opacity-50 md:block"
          ></i>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default MovieList;
