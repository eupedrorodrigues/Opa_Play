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

interface BaseVideoProps {
  onSelectVideo: (video: ListVideo) => void;
  onToggleFavorite: (video: ListVideo) => void;
}

export interface VideoProps extends BaseVideoProps {
  video: ListVideo;
  isFavorite: boolean;
}

export interface FavoriteProps extends BaseVideoProps {
  favorites: ListVideo[];
  videos?: ListVideo[];
}

export interface HeaderProps {
  onToggleShowFavorites: () => void;
  isShowingFavorites: boolean;
  onSearch: (search: string) => void;
}
