import React from "react";
import VideoTrailer from "./VideoTrailer";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import { useNowPlaying } from "../hooks/useNowPlaying";

const VideoContainer = () => {
  const nowPlaying = useSelector((state) => state.movies?.nowPlaying);
  useNowPlaying();
  if (!nowPlaying) return;
  return (
    <div>
      <VideoTrailer movieId={nowPlaying[0]?.id} />
      <VideoTitle nowPlayinDetails={nowPlaying[0]} />
    </div>
  );
};

export default VideoContainer;
