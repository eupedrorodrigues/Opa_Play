"use client";

import { BadgeCheck } from "lucide-react";

import { ListVideo } from "@/types/video";
import { formatDate } from "@/utils/formatters";

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

      <div className="w-full bg-[#292D38]  mt-5 p-5 rounded-2xl">
        <h1 className=" md:pl-0 font-semibold">{video.snippet.title}</h1>
        <h5 className="flex items-center text-sm  tex  md:pl-0 my-3 opacity-50">
          {video.snippet.channelTitle}
          <span>
            <BadgeCheck className="ml-2" size={12} />
          </span>
        </h5>

        <p className="text-xs  opacity-50 my-3">
          Publicado em: {formatDate(video.snippet.publishedAt)}
        </p>
        <p className="text-xs  opacity-50">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
