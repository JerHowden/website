export type SpotifyNowPlaying = {
  isPlaying: boolean;
  artist?: string;
  album?: string;
  imageURL?: string;
  title?: string;
  linkURL?: string;
  progressMs?: number;
  durationMs?: number;
};
