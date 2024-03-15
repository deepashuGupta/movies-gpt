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
    <div className="absolute -top-1 bg-black bg-opacity-50 text-white w-[full] px-8 py-[20%]">
      <p className="text-6xl font-bold">{nowPlayinDetails?.original_title}</p>
      <p className="w-1/3 my-4">{nowPlayinDetails.overview}</p>
      <div>
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
