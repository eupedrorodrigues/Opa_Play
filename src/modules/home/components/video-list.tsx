"use client";

import { useQuery } from "@tanstack/react-query";
import { getListEmployees } from "@/service/video";
import { ListVideo } from "@/types/video";
import VideoItem from "@/modules/home/components/video-item";

interface Props {
  onSelectVideo: (video: ListVideo) => void;
  favorites: ListVideo[];
  onToggleFavorite: (video: ListVideo) => void;
  videos?: ListVideo[];
}

const VideoList = ({
  onSelectVideo,
  favorites,
  onToggleFavorite,
  videos,
}: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: getListEmployees,
    enabled: !videos,
  });

  const videoList = videos || data;

  if (isLoading) return <p>Carregando vídeos...</p>;
  if (error) return <p>Erro ao carregar vídeos.</p>;

  return (
    <div className="grid grid-cols-3 gap-8">
      {videoList?.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onSelectVideo={onSelectVideo}
          isFavorite={favorites.some((fav) => fav.id === video.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default VideoList;
