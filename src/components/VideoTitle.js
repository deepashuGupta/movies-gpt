const VideoTitle = ({ nowPlayinDetails }) => {
  if (!nowPlayinDetails) return;
  return (
    <div className="absolute top-0 bg-black bg-opacity-40 text-white w-full aspect-video px-8 py-[20%]">
      <p className="text-6xl font-bold">{nowPlayinDetails?.original_title}</p>
      <p className="w-1/3 my-4">{nowPlayinDetails.overview}</p>
      <div>
        <button className="px-8 py-2 bg-white text-black">
          <i className="fa-solid fa-play mr-1"></i>
          Play
        </button>
        <button className="px-8 py-2 bg-white text-black bg-opacity-40 mx-2">
          <i className="fa-solid fa-circle-info mr-1"></i>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
