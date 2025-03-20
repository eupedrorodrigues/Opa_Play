export interface ListVideo {
  id: string;
  title: string;
  video: string;
}

export interface VideoProps {
  video: ListVideo;
  onSelectVideo: (video: ListVideo) => void;
  isFavorite: boolean;
  onToggleFavorite: (video: ListVideo) => void;
}

export interface FavoriteProps {
  onSelectVideo: (video: ListVideo) => void;
  favorites: ListVideo[];
  onToggleFavorite: (video: ListVideo) => void;
  videos?: ListVideo[];
}

export interface HeaderProps {
  onToggleShowFavorites: () => void;
  isShowingFavorites: boolean;
}
