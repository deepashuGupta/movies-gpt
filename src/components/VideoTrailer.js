import { useSelector } from "react-redux";
import { useTrailerVideo } from "../hooks/useTrailerVideo";

const VideoTrailer = ({ movieId }) => {
  const trailer = useSelector((state) => state?.movies?.trailers);

  useTrailerVideo(movieId);
  if (!trailer) return;
  return (
    <div>
      <iframe
        className="w-full aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailer[0]?.key +
          "?&rel=0&autoplay=1&mute=1&controls=0&&showinfo=0&loop=1&playlist=" +
          trailer[0]?.key
        }
        title="YouTube video player"
        frameBorder="0"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoTrailer;
