"use client";

import { useState, useEffect } from "react";

import Header from "@/components";
import VideoList from "@/modules/components/video-list";
import { ListVideo } from "@/types/video";
import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "@/utils/localstorage";

const HomeVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<ListVideo | null>(null);
  const [favorites, setFavorites] = useState<ListVideo[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    setFavorites(getFavoritesFromStorage());
  }, []);

  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  const handleToggleFavorite = (video: ListVideo) => {
    setFavorites((prev) =>
      prev.some((fav) => fav.id === video.id)
        ? prev.filter((fav) => fav.id !== video.id)
        : [...prev, video]
    );
  };

  const handleSelectVideo = (video: ListVideo) => {
    setSelectedVideo(video);
    window.history.pushState({ video }, "", `?video=${video.id}`);
  };

  useEffect(() => {
    const handlePopState = () => setSelectedVideo(null);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <>
      <Header
        onToggleShowFavorites={() => setShowFavorites(!showFavorites)}
        isShowingFavorites={showFavorites}
      />
      <main className="pt-32 container mx-auto px-4">
        {selectedVideo ? (
          <VideoPlayer video={selectedVideo} />
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">
              {showFavorites ? "Vídeos Favoritos" : "Todos os Vídeos"}
            </h2>
            <VideoList
              onSelectVideo={handleSelectVideo}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              videos={showFavorites ? favorites : undefined}
            />
          </>
        )}
      </main>
    </>
  );
};

const VideoPlayer = ({ video }: { video: ListVideo }) => (
  <div className="mb-6">
    <iframe
      className="w-full aspect-video rounded-lg shadow-lg"
      src={video.video}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <p className="mt-2 text-lg font-semibold">{video.title}</p>
  </div>
);

export default HomeVideo;
