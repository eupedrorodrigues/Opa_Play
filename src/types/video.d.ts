interface DataVideo {
  title: string;
  description: string;
  channelTitle: string;
  publishedAt: string;
}

export interface ListVideo {
  id: number;
  snippet: DataVideo;
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
  onSearch: (search: string) => void;
}
