"use client";

import { MoveLeft } from "lucide-react";
import { useState, useEffect } from "react";

import Header from "@/components";
import VideoList from "@/modules/components/video-list";
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
      return isFavorite
        ? prevFavorites.filter((fav) => fav.id !== video.id)
        : [...prevFavorites, video];
    });
  };

  const handleSelectVideo = (video: ListVideo) => {
    setSelectedVideo(video);
    window.history.pushState({ video }, "", `?video=${video.id}`);
  };

  useEffect(() => {
    const handlePopState = () => {
      setSelectedVideo(null);
    };

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
          <div className="mb-6">
            <button
              className="w-full max-w-sm md:max-w-3xl flex flex-col gap-10"
              onClick={() => window.history.back()}
            >
              <MoveLeft
                size={40}
                className="bg-black p-2 rounded-full text-white animate-bounce-horizontal"
              />
            </button>
            <iframe
              className="w-full aspect-video rounded-lg shadow-lg"
              src={selectedVideo.video}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p className="mt-2 text-lg font-semibold">{selectedVideo.title}</p>
          </div>
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

export default HomeVideo;
