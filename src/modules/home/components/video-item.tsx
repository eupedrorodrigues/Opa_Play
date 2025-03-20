"use client";

import { useRef } from "react";

import { ListVideo } from "@/types/video";
import { urlVideoFormatter } from "@/utils/formatters";

interface Props {
  video: ListVideo;
  onSelectVideo: (video: ListVideo) => void;
}

const VideoItem = ({ video, onSelectVideo }: Props) => {
  const videoRef = useRef<HTMLIFrameElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const videoId = urlVideoFormatter(video.video);
      videoRef.current.src = `${video.video}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.src = video.video;
    }
  };

  return (
    <div
      className="cursor-pointer relative p-6"
      onClick={() => onSelectVideo(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        ref={videoRef}
        className="w-full h-52 rounded-lg"
        src={video.video}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p className="text-sm font-bold mt-2">{video.title}</p>
    </div>
  );
};

export default VideoItem;
