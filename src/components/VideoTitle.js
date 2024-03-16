import { useDispatch } from "react-redux";
import { setShowPopUp } from "../store/appConfigSlice";
import { getMovieDetails, getTrailerById } from "../store/actions/movieAction";

const VideoTitle = ({ nowPlayinDetails }) => {
  const dispatch = useDispatch();

  const handleNowPlayingInfo = () => {
    dispatch(setShowPopUp(true));
    dispatch(getMovieDetails(nowPlayinDetails?.id));
    dispatch(getTrailerById(nowPlayinDetails?.id));
  };
  if (!nowPlayinDetails) return;
  return (
    <div className="absolute -top-1 bg-black bg-opacity-60 text-white w-[100%] px-8 py-[72%] md:py-[20%]">
      <p className="font-bold text-3xl md:text-6xl ">
        {nowPlayinDetails?.original_title}
      </p>
      <p className="my-4 hidden md:w-1/3 md:block">
        {nowPlayinDetails.overview}
      </p>
      <div className="my-4 md:my-0">
        <button
          className="px-8 py-2 bg-white text-black"
          onClick={handleNowPlayingInfo}
        >
          <i className="fa-solid fa-play mr-1"></i>
          Play
        </button>
        <button
          className="px-8 py-2 bg-white text-black bg-opacity-40 mx-2"
          onClick={handleNowPlayingInfo}
        >
          <i className="fa-solid fa-circle-info mr-1"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
