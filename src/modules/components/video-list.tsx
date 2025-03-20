"use client";

import { useQuery } from "@tanstack/react-query";
import { getListEmployees } from "@/service/video";
import { FavoriteProps } from "@/types/video";
import VideoItem from "@/modules/components/video-item";

const VideoList = ({
  onSelectVideo,
  favorites,
  onToggleFavorite,
  videos,
}: FavoriteProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["videos"],
    queryFn: getListEmployees,
    enabled: !videos,
  });

  const videoList = videos || data;

  if (isLoading) return <p>Carregando vídeos...</p>;
  if (error) return <p>Erro ao carregar vídeos.</p>;

  return (
    <div className="video-container">
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
