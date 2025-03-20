import { ListVideo } from "@/types/video";

export const getFavoritesFromStorage = (): ListVideo[] => {
  if (typeof window === "undefined") return [];
  const storedFavorites = localStorage.getItem("favorites");
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

export const saveFavoritesToStorage = (favorites: ListVideo[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};
