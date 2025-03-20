"use client";

import { ListVideo } from "@/types/video";

const VideoPlayer = ({ video }: { video: ListVideo }) => {
  const videoUrl = `${video.video}?autoplay=1`;

  return (
    <div className="mb-10 px-0 md:px-8">
      <iframe
        className="w-full mb-5 aspect-video rounded-lg shadow-lg"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay"
        allowFullScreen
      ></iframe>
      <h1 className="text-white pl-4 md:pl-0 font-semibold">{video.title}</h1>
      <div>1.000.000.000</div>
    </div>
  );
};

export default VideoPlayer;
