"use client";

import { useState, useEffect } from "react";
import Header from "@/components";
import VideoList from "@/modules/home/components/video-list";
import { ListVideo } from "@/types/video";

const HomeVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<ListVideo | null>(null);
  const [favorites, setFavorites] = useState<ListVideo[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleToggleFavorite = (video: ListVideo) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((fav) => fav.id === video.id);
      if (isFavorite) {
        return prevFavorites.filter((fav) => fav.id !== video.id);
      } else {
        return [...prevFavorites, video];
      }
    });
  };

  return (
    <>
      <Header
        onToggleShowFavorites={() => setShowFavorites(!showFavorites)}
        isShowingFavorites={showFavorites}
      />
      <main className="pt-32 container mx-auto px-4">
        {selectedVideo && (
          <div className="mb-6">
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={selectedVideo.video}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-2 text-lg font-semibold">{selectedVideo.title}</p>
          </div>
        )}

        <h2 className="text-xl font-bold mb-4">
          {showFavorites ? "Vídeos Favoritos" : "Todos os Vídeos"}
        </h2>

        <VideoList
          onSelectVideo={setSelectedVideo}
          favorites={favorites}
          onToggleFavorite={handleToggleFavorite}
          videos={showFavorites ? favorites : undefined} // Se showFavorites for true, mostra apenas os favoritos
        />
      </main>
    </>
  );
};

export default HomeVideo;
