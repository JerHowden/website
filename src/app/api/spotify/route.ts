import { SpotifyNowPlaying } from '@/components';
import { getNowPlaying } from './api';

export const revalidate = 30;

export async function GET() {
  const nowPlayingCall = await getNowPlaying();
  // console.log('\n --- now playing response ---\n', nowPlayingCall, '\n');

  if (!nowPlayingCall.ok || nowPlayingCall.status === 204) {
    return Response.json(nowPlayingCall);
  }

  const nowPlaying = await nowPlayingCall.json();
  // console.log('\n --- song ---\n', nowPlaying, '\n');

  if (!nowPlaying.is_playing || (!nowPlaying.item && !nowPlaying.currently_playing_type)) {
    // console.log('\nNot playing anything in now-playing.ts\n', nowPlayingCall);
    return Response.json({ isPlaying: false });
  }

  let body: SpotifyNowPlaying = {
    isPlaying: false,
    artist: '',
    album: '',
    imageURL: '',
    title: '',
    linkURL: '',
  };

  if (nowPlaying.currently_playing_type === 'track') {
    body = {
      isPlaying: nowPlaying.is_playing,
      artist: nowPlaying.item?.artists.map((artist: { name: string }) => artist.name).join(', '),
      album: nowPlaying.item?.album.name,
      imageURL: nowPlaying.item?.album.images[0].url,
      title: nowPlaying.item?.name,
      linkURL: nowPlaying.item?.external_urls.spotify,
    };
  }

  if (nowPlaying.currently_playing_type === 'episode') {
    body = {
      isPlaying: nowPlaying.is_playing,
      artist: nowPlaying.item?.show.name,
      album: '',
      imageURL: nowPlaying.item?.show.images[0].url,
      title: nowPlaying.item?.name,
      linkURL: nowPlaying.item?.external_urls.spotify,
    };
  }

  return Response.json(body);
}
