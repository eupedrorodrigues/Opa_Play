"use client";

import { useState, useEffect } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import Header from "@/components/header/index";
import VideoList from "@/modules/components/video-list";
import VideoPlayer from "@/modules/components/video-player";

import { ListVideo } from "@/types/video";
import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "@/utils/localstorage";
import { getListEmployees } from "@/service/video";

const HomeVideo = () => {
  const [selectedVideo, setSelectedVideo] = useState<ListVideo | null>(null);
  const [favorites, setFavorites] = useState<ListVideo[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [videos, setVideos] = useState<ListVideo[]>([]);
  const [page, setPage] = useState(1);
  const videosPerPage = 12;

  const fetchVideos = async () => {
    const allVideos = await getListEmployees();
    setVideos(allVideos);
  };

  const filteredVideos = videos.filter((video) =>
    video.snippet.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);
  const displayedVideos = filteredVideos.slice(
    (page - 1) * videosPerPage,
    page * videosPerPage
  );

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
    setFavorites(getFavoritesFromStorage());
  }, []);

  useEffect(() => {
    saveFavoritesToStorage(favorites);
  }, [favorites]);

  useEffect(() => {
    fetchVideos();
  }, []);

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
        onSearch={setSearchTerm}
      />
      <main className="pt-24 flex flex-col justify-evenly px-5 md:px-10">
        {selectedVideo ? (
          <VideoPlayer video={selectedVideo} />
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">
              {showFavorites ? "Vídeos Favoritos" : ""}
            </h2>
            <VideoList
              onSelectVideo={handleSelectVideo}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite}
              videos={showFavorites ? favorites : displayedVideos}
            />

            <Pagination className="my-14">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    className="text-white cursor-pointer"
                  />
                </PaginationItem>
                <span className="mx-4 text-white">
                  Página {page} de {totalPages}
                </span>
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className="text-white cursor-pointer"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </>
        )}
      </main>
    </>
  );
};

export default HomeVideo;
