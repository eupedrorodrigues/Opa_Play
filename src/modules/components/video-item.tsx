"use client";

import { useRef } from "react";
import { VideoProps } from "@/types/video";
import { urlVideoFormatter } from "@/utils/formatters";
import { Heart } from "lucide-react";

const VideoItem = ({
  video,
  onSelectVideo,
  isFavorite,
  onToggleFavorite,
}: VideoProps) => {
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
      className="cursor-pointer relative px-4 py-8 video-hover"
      onClick={() => onSelectVideo(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <iframe
        ref={videoRef}
        className="w-full h-40 rounded-lg"
        src={video.video}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>

      <div className="flex items-center justify-between mt-2">
        <h6 className="text-sm text-white font-bold">{video.title}</h6>

        <button
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(video);
          }}
        >
          <Heart
            size={20}
            className={
              isFavorite ? "text-red-500 fill-red-500" : "text-gray-400"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default VideoItem;
