import { useSelector } from "react-redux";
import { POSTER_URL } from "../utils/constant";

const MovieInfo = () => {
  const { movieInfo, trailerByID } = useSelector((state) => state.movies);
  console.log(trailerByID);
  return (
    <div className="flex text-white">
      <iframe
        className="h-[480px] aspect-video mr-2"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          (trailerByID.length > 0 ? trailerByID[0]?.key : "Yxe-mIVIwM4")
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <div>
        <div className="flex">
          <img
            className="w-28"
            src={POSTER_URL + movieInfo?.poster_path}
            alt={movieInfo?.poster_path}
          />
          <div className="ml-2">
            <h1 className="text-xl font-semibold">
              {movieInfo?.title}
              {" (" + movieInfo?.release_date.split("-")[0] + ")"}
            </h1>
            <p className="text-sm opacity-45">
              {movieInfo?.tagline + " || "}
              {movieInfo?.genres.map((g) => (
                <span key={g?.id} className="text-sm">
                  {g?.name + ", "}
                </span>
              ))}
            </p>
          </div>
        </div>
        <hr className="my-2" />
        <div>
          <h1 className="text-xl first-letter:font-semibold">
            {movieInfo?.title}
          </h1>
          <p className="text-sm my-2">
            {movieInfo?.overview?.length > 250
              ? movieInfo?.overview?.substring(0, 251) + "..."
              : movieInfo?.overview}
          </p>
          <p className="text-xl first-letter:font-semibold">Production House</p>
          {movieInfo?.production_companies.slice(0, 3).map((p) => (
            <span key={p.id} className="flex items-center">
              {p?.logo_path && (
                <>
                  <img
                    className="w-10 h-10 object-contain mr-4 bg-white my-2"
                    src={POSTER_URL + p?.logo_path}
                    alt={p?.logo_path}
                  />

                  <span>{p?.name}</span>
                </>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
